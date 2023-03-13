"use client"

import { useEffect, useState } from "react";
import Counter from "./Counter";
import EmojiDisplay from "./EmojiDisplay";
import GuessInput from "./GuessInput";
import FailureScreen from "./FailureScreen";
import CongratulationsScreen from "./CongratulationsScreen";
import { questions } from "../data/questions";

function shuffle(array: Array<any>) {
  // Loop through the array
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at positions i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

interface Question {
  title: string;
  emoji: string;
  mediaType: string;
}

export default function GameForm() {
  // Initialisation
  const [questionIndex, setQuestionIndex] = useState(0);

  // Question details
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [mediaType, setMediaType] = useState("");

  // Game states
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

  const handleCorrectGuess = () => {
    setCount((prevCount) => prevCount + 1);

    if (questionIndex === shuffledQuestions.length - 1) {
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
  };

  const handleFailure = () => {
    setShowFailureScreen(true);
  };

  return (
    <div style={{textAlign: "center"}}>
      {showCongratulationsScreen ? (
        <CongratulationsScreen onRestart={handleRestart} />
      ) : showFailureScreen ? (
        <FailureScreen onRestart={handleRestart} />
      ) : (
        <>
          <Counter count={count} />
          <EmojiDisplay emoji={emoji} mediaType={mediaType} />
          <GuessInput
            answer={title}
            onCorrectGuess={handleCorrectGuess}
            onIncorrectGuess={handleFailure}
          />
        </>
      )}
    </div>
  );
}