"use client"

import { useEffect, useState } from "react";

// Components
import Counter from "./Counter";
import EmojiDisplay from "./EmojiDisplay";
import GuessInput from "./GuessInput";
import Countdown from "./Countdown";
import Points from "./Points";
import CongratulationsScreen from "./CongratulationsScreen";
import SideMenu from "./SideMenu";
import IntroScreen from "./IntroScreen";
import Navbar from "./Navbar";

// Utils & Data
import { questions } from "../data/questions";
import shuffle from "../app/utils/shuffle";

// Types
import Question from "../app/types/Question";
import { MediaType } from "../app/types/MediaType";

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
  const [correctCount, setCorrectCount] = useState(0);
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [acceptableAnswers, setAcceptableAnswers] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [selectedMediaTypes, setSelectedMediaTypes] = useState(Object.values(MediaType));

  // Game states
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [introTimeRemaining, setIntroTimeRemaining] = useState(3);
  const [showIntroScreen, setShowIntroScreen] = useState(true);
  const [highestScore, setHighestScore] = useState<number>(
    parseInt(localStorage.getItem("highestScore") ?? "0")
  );
  const [showCongratulationsScreen, setShowCongratulationsScreen] = useState(false);

  // Shuffle the questions array and store the shuffled array in state
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  // This function shuffles the questions array and starts Intro Countdown
  useEffect(() => {
    const savedCheckedItems = JSON.parse(localStorage.getItem('checkedItems') || '[]');

    const filteredQuestions = questions.filter((question) => {
      return !savedCheckedItems.includes(question.mediaType);
    });

    const shuffledQuestions = shuffle(filteredQuestions);
    setShuffledQuestions(shuffledQuestions);
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
    if (correctCount > highestScore) {
      setHighestScore(correctCount);
      localStorage.setItem("highestScore", correctCount.toString());
    }
  }, [correctCount, setHighestScore, highestScore]);
  
  // Handle Guess
  const handleGuess = (isCorrect: boolean) => {
    setCount((prevCount) => prevCount + 1);

    const newGuess: Guess = { guess: title, isCorrect };

    if (newGuess.isCorrect) {
      setCorrectCount((prevIndex) => prevIndex + 1)
    }

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
    setCorrectCount(0);
    setQuestionIndex(0);
    setGuesses([]);
    setShowCongratulationsScreen((isShowing) => !isShowing);

    const savedCheckedItems = JSON.parse(localStorage.getItem('checkedItems') || '[]');

    const filteredQuestions = questions.filter((question) => {
      return !savedCheckedItems.includes(question.mediaType);
    });

    const shuffledQuestions = shuffle(filteredQuestions);
    setShuffledQuestions(shuffledQuestions);

    setIsMenuOpen(false);
    handleIntroCountdownStart();
  };

  const handleCountdownFinish = () => {
    setShowCongratulationsScreen((isShowing) => !isShowing);
  }

  const handleIntroCountdownStart = () => {
    setShowIntroScreen((isShowing) => !isShowing);
  }

  const handleIntroCountdownFinish = () => {
    setShowIntroScreen((isShowing) => !isShowing);
    setIntroTimeRemaining(3);
    setTimeRemaining(60);
  }

  const handleTimeTick = () => {
    setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
  }

  const handleIntroTimeTick = () => {
    setIntroTimeRemaining((prevIntroTimeRemaining) => prevIntroTimeRemaining - 1);
  }

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleCheckboxChange = (checkedItems: string[]) => {
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  };

  return (
    <div className="bg-smiles">
      <SideMenu isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} onCheckboxChange={handleCheckboxChange} />

      <div className="h-screen flex flex-col justify-between">
        {showCongratulationsScreen ? (
          <>
            <div className="h-screen w-screen flex flex-col justify-between">
              <Navbar onMenuToggle={handleMenuToggle} />
              <CongratulationsScreen onRestart={handleRestart} count={count} guesses={guesses} finalScore={guesses.filter((guess) => guess.isCorrect === true).length} />
            </div>
          </>
        ) : showIntroScreen ? (
          <>
            <div className="h-screen w-screen flex flex-col justify-between">
              <Navbar onMenuToggle={handleMenuToggle} />
              <IntroScreen introTimeRemaining={introTimeRemaining} onIntroTimeTick={handleIntroTimeTick} onCountdownFinish={handleIntroCountdownFinish} />
            </div>
          </>
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
          <div className="bg-indigo-100 border-t-4 border-black">
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