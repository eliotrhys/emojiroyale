import { FormEventHandler, useCallback, useEffect, useRef, useState } from "react";
import Keyboard from "./Keyboard";

interface Guess {
  guess: string;
  isCorrect: boolean;
}

interface GuessInputProps {
  answer: string;
  potentialAnswers: string[];
  onGuess: (isCorrect: boolean) => void;
  guesses: Guess[];
}

export default function GuessInput(props: GuessInputProps) {
      
    const [guess, setGuess] = useState("");
    // const inputRef = useRef<HTMLInputElement>(null);
    const [showCorrectImage, setShowCorrectImage] = useState(false);
    const [showWrongImage, setShowWrongImage] = useState(false);
    const [animationKey, setAnimationKey] = useState<number>(0);

    useEffect(() => {
      // Keep for logging in debugging
        // console.log("The current answer is - ", props.answer);
        // console.log("The current potential answers are - ", props.potentialAnswers);
    }, [props.answer]);

    useEffect(() => {
      console.log("Guess updated: ", guess);
    }, [guess]);

    const resetImages = useCallback(() => {
      setShowCorrectImage(false);
      setShowWrongImage(false);
    }, [setShowCorrectImage, setShowWrongImage]);
  
    useEffect(() => {
      resetImages();
    }, [resetImages]);
    
    const handleSubmit = () => {

      console.log("ANSWER IS: " + props.answer);
      console.log("GUESS IS: " + guess);
      
      resetImages();

      const lowerCasePotentialAnswers = props.potentialAnswers.map((answer) =>
        answer.toLowerCase()
      );

      if (lowerCasePotentialAnswers.includes(guess.toLowerCase().trimEnd())) 
      {
        props.onGuess(true);
        props.guesses.push({ guess, isCorrect: true });
        setShowCorrectImage(true);
      } 
      else 
      {
        props.onGuess(false);
        props.guesses.push({ guess, isCorrect: false });
        setShowWrongImage(true);
      }
      setGuess("");
      setAnimationKey(Date.now());
    }

    const handleCurrentWordChange = useCallback((currentWord: string) => {
      setGuess(currentWord);
    }, [guess]);

    return (
        <div className="mb-4 lg:mb-4 relative">
          { showCorrectImage && (
            <div className="absolute -top-20 right-0 lg:-top-40 lg:-right-10">
              <div key={animationKey} className="relative bloom">
                <img
                  src="/images/greenBubble.svg"
                  alt="green bubble"
                  className="h-20 lg:h-26 z-10"
                />
                <img
                  src="/images/greenTail.svg"
                  alt="green tail"
                  className="h-20 lg:h-26 z-10 absolute bottom-0 -left-10"
                />
                <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">Correct!</div>
              </div>
            </div>
          )}
          { showWrongImage && (
            <div className="absolute -top-20 right-0 lg:-top-40 lg:-right-10">
              <div key={animationKey} className="relative bloom">
              <img
                  src="/images/redBubble.svg"
                  alt="green bubble"
                  className="h-20 lg:h-26 z-10"
                />
                <img
                  src="/images/redTail.svg"
                  alt="red tail"
                  className="h-20 lg:h-26 z-10 absolute bottom-0 -left-10"
                />
                <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">Wrong!</div>
              </div>
            </div>
          )}
          <div className="mb-4 lg:mb-10">
            <Keyboard handleCurrentWordChange={handleCurrentWordChange} onEnter={handleSubmit} />
          </div>
        </div>
    );
}
  