"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import Counter from "./Counter";
import EmojiDisplay from "./EmojiDisplay";
import GuessInput from "./GuessInput";
import Countdown from "./Countdown";
import Points from "./Points";
import CongratulationsScreen from "./CongratulationsScreen";

// Utils & Data
import { questions } from "../data/questions";
import shuffle from "../app/utils/shuffle";
import horizontalLogo from "../public/images/horizontal_logo.png";

// Types
import Question from "../app/types/Question";

type Guess = {
  guess: string;
  isCorrect: boolean;
}

export default function GameForm() {
  // Initialisation
  const [questionIndex, setQuestionIndex] = useState(0);

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

  // Shuffle the questions array and store the shuffled array in state
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  
  useEffect(() => {
    setShuffledQuestions(shuffle(questions));
    console.log(shuffledQuestions);
  }, []);

  // Set the title, emoji and mediaType when the questionIndex changes
  useEffect(() => {
    if (shuffledQuestions.length > 0) {
      setTitle(shuffledQuestions[questionIndex].title);
      setEmoji(shuffledQuestions[questionIndex].emoji);
      setMediaType(shuffledQuestions[questionIndex].mediaType);
      setAcceptableAnswers(shuffledQuestions[questionIndex].acceptableAnswers);
    }
  }, [questionIndex, shuffledQuestions]);

  // Local Storage high score
  useEffect(() => {
    if (count > highestScore) {
      setHighestScore(count);
      localStorage.setItem("highestScore", count.toString());
      console.log("This users highest score is " + count.toString());
    }
  }, [count, setHighestScore, highestScore]);

  
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
    setTimeRemaining(60);
  };

  const handleCountdownFinish = () => {
    setShowCongratulationsScreen(true);
  }

  const handleTimeTick = () => {
    setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
  }

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-between">
      {showCongratulationsScreen ? (
        <CongratulationsScreen onRestart={handleRestart} count={count} guesses={guesses} finalScore={guesses.filter((guess) => guess.isCorrect === true).length} />
      ) : (
        <>
        <div className="px-4 pt-4">
          <Link href="/">
            <Image alt="Horizontal Logo" className="mx-auto lg:m-0" src={horizontalLogo} height={36} />
          </Link>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid">
              <div className="w-full lg:w-2/3 xl:w-1/3 mx-auto flex flex-col justify-between">
                <div className="mb-10">
                  <Counter count={count} />
                  <Countdown timeRemaining={timeRemaining} onTimeTick={handleTimeTick} onCountdownFinish={handleCountdownFinish} />
                  <Points count={count} guesses={guesses} />
                </div>
                <EmojiDisplay emoji={emoji} mediaType={mediaType} />
              </div>
            </div>
        </div>
        <div className="bg-slate-100 border-t-4 border-black">
          <div className="container mx-auto px-4">
            <div className="grid">
              <div className="w-full lg:w-2/3 xl:w-1/3 mx-auto flex flex-col justify-between">
                <div className="mt-10">
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
  );
}