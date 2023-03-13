"use client"

import { useEffect, useState } from "react";

// Components
import Counter from "./Counter";
import EmojiDisplay from "./EmojiDisplay";
import GuessInput from "./GuessInput";
import FailureScreen from "./FailureScreen";
import CongratulationsScreen from "./CongratulationsScreen";

// Utils & Data
import { questions } from "../data/questions";
import shuffle from "../app/utils/shuffle";

// Types
import Question from "../app/types/Question";

export default function GameForm() {
  // Initialisation
  const [questionIndex, setQuestionIndex] = useState(0);

  // Question details
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [mediaType, setMediaType] = useState("");

  // Game states
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [highestScore, setHighestScore] = useState<number>(
    parseInt(localStorage.getItem("highestScore") ?? "0")
  );
  const [showFailureScreen, setShowFailureScreen] = useState(false);
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
    }
  }, [questionIndex, shuffledQuestions]);

  useEffect(() => {
    if (count > highestScore) {
      setHighestScore(count);
      localStorage.setItem("highestScore", count.toString());
      console.log("This users highest score is " + count.toString());
    }
  }, [count, setHighestScore, highestScore]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      setShowCongratulationsScreen(true);
    }
  }, [timeRemaining]);

  const handleCorrectGuess = () => {
    setCount((prevCount) => prevCount + 1);

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
    setShowFailureScreen(false);
    setShowCongratulationsScreen(false);
    setShuffledQuestions(shuffle(questions));
    setTimeRemaining(60);
  };

  const handleFailure = () => {
    setShowFailureScreen(true);
  };

  return (
    <div style={{textAlign: "center"}}>
      {showCongratulationsScreen ? (
        <CongratulationsScreen onRestart={handleRestart} currentScore={count} />
      ) : showFailureScreen ? (
        <FailureScreen onRestart={handleRestart} />
      ) : (
        <>
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <div className="text-center">
              
              <p>Time remaining: {timeRemaining}</p>
              <Counter count={count} />
              <EmojiDisplay emoji={emoji} mediaType={mediaType} />
              <GuessInput
                answer={title}
                onCorrectGuess={handleCorrectGuess}
                onIncorrectGuess={handleFailure}
              />
            </div>
        </div>
        </>
      )}
    </div>
  );
}