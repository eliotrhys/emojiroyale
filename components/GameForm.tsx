"use client"

import { useCallback, useEffect, useState } from "react";

// Components
import Counter from "./Counter";
import EmojiDisplay from "./EmojiDisplay";
import GuessInput from "./GuessInput";
import Countdown from "./Countdown";
import Points from "./Points";
import CongratulationsScreen from "./CongratulationsScreen";
import SideMenu from "./SideMenu";

// Utils & Data
import { questions } from "../data/questions";
import shuffle from "../app/utils/shuffle";

// Types
import Question from "../app/types/Question";
import CountdownScreen from "./CountdownScreen";
import Navbar from "./Navbar";

interface Guess {
  guess: string;
  isCorrect: boolean;
}

export default function GameForm() {
  // Initialisation
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Question details
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [acceptableAnswers, setAcceptableAnswers] = useState<string[]>([]);

  const [guesses, setGuesses] = useState<Guess[]>([]);

  // Game states
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [highestScore, setHighestScore] = useState<number>(
    parseInt(localStorage.getItem("highestScore") ?? "0")
  );
  const [showCongratulationsScreen, setShowCongratulationsScreen] = useState(false);
  const [showCountdownScreen, setShowCountdownScreen] = useState(false);
  const [introCountdown, setIntroCountdown] = useState(3);
  const [countdownInterval, setCountdownInterval] = useState<NodeJS.Timeout | null>(null);

  // Shuffle the questions array and store the shuffled array in state
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  // ATTEMPT TO MAKE TIMER WORK ON MOUNT
  // useEffect(() => {
  //   console.log("RUNNING ONCE");
  //   handleRestart();
  // }, []);
  
  // This function shuffles the questions array
  useEffect(() => {
    setShuffledQuestions(shuffle(questions));
    console.log(shuffledQuestions);
  }, []);

  // This functions sets the title, emoji and mediaType when the questionIndex changes
  useEffect(() => {
    if (shuffledQuestions.length > 0) {
      setTitle(shuffledQuestions[questionIndex].title);
      setEmoji(shuffledQuestions[questionIndex].emoji);
      setMediaType(shuffledQuestions[questionIndex].mediaType);
      setAcceptableAnswers(shuffledQuestions[questionIndex].acceptableAnswers);
    }
  }, [questionIndex, shuffledQuestions]);

  // This function gets the Local Storage high score
  useEffect(() => {
    if (count > highestScore) {
      setHighestScore(count);
      localStorage.setItem("highestScore", count.toString());
      console.log("This users highest score is " + count.toString());
    }
  }, [count, setHighestScore, highestScore]);

  // This function deals with the countdown (STILL TO FIX?)
  useEffect(() => {
    if (introCountdown === 0) {
      setShowCountdownScreen(false); // toggle off the countdown screen
      setTimeRemaining(60); // restart the game timer
      setIntroCountdown(3)
    }
  }, [introCountdown]);
  
  const handleGuess = (isCorrect: boolean) => {
    setCount((prevCount) => prevCount + 1);

    const newGuess: Guess = { guess: title, isCorrect };
    setGuesses([...guesses, newGuess]);

    if (questionIndex === shuffledQuestions.length - 1) {
      // Should never be hit but keep in case
      setShowCongratulationsScreen(true);
    } 
    else
    {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleRestart = () => {
    
    setCount(0);
    setQuestionIndex(0);
    setGuesses([]);
    setShowCongratulationsScreen(false);
    setShuffledQuestions(shuffle(questions));
    setShowCountdownScreen(true);
    setIntroCountdown(3); // set the intro countdown to 3
    
      // Clear any existing countdown interval
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }

    // Start a new countdown interval
    const newCountdownInterval = setInterval(() => {
      if (introCountdown > 0) {
        setIntroCountdown((prevCount) => prevCount - 1);
      } else {
        setShowCountdownScreen(false);
        setTimeRemaining(60);
        clearInterval(newCountdownInterval); // Clear the new interval when it is done
      }
    }, 1000);

    setCountdownInterval(newCountdownInterval);

  };

  const handleCountdownFinish = () => {
    setShowCongratulationsScreen(true);
  }

  const handleTimeTick = () => {
    setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
  }

  const handleMenuToggle = () => {
    console.log("FIRING MENU");
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div>
      <SideMenu isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />

      <div className="h-screen w-screen flex flex-col justify-between">
        {showCongratulationsScreen ? (
          <CongratulationsScreen onRestart={handleRestart} count={count} guesses={guesses} finalScore={guesses.filter((guess) => guess.isCorrect === true).length} />
        ) : showCountdownScreen ? (
          <CountdownScreen introCount={introCountdown} />
        ) : (
          <>
          <div>
            <Navbar onMenuToggle={handleMenuToggle} />

            <div className="container mx-auto px-4">
              <div className="grid">
                  <div className="w-full lg:w-2/3 xl:w-1/3 mx-auto flex flex-col justify-between">
                    <div className="">
                      <Counter count={count} />
                      <Countdown timeRemaining={timeRemaining} onTimeTick={handleTimeTick} onCountdownFinish={handleCountdownFinish} />
                      <div className="mb-4 lg:mb-6">
                        <Points count={count} guesses={guesses} />
                      </div>
                    </div>
                    <EmojiDisplay emoji={emoji} mediaType={mediaType} />
                  </div>
                </div>
            </div>
          </div>
          <div className="bg-slate-100 border-t-4 border-black">
            <div className="container mx-auto px-4">
              <div className="grid">
                <div className="w-full lg:w-2/3 xl:w-1/3 mx-auto flex flex-col justify-between">
                  <div className="mt-4 lg:mt-10">
                    <GuessInput
                      answer={title}
                      potentialAnswers={acceptableAnswers}
                      onGuess={handleGuess}
                      guesses={guesses}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </div>

  );
}