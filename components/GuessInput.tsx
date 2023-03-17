import { FormEventHandler, useCallback, useEffect, useRef, useState } from "react";

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
    const inputRef = useRef<HTMLInputElement>(null);
    const [showCorrectImage, setShowCorrectImage] = useState(false);
    const [showWrongImage, setShowWrongImage] = useState(false);
    const [animationKey, setAnimationKey] = useState<number>(0);

    useEffect(() => {
        console.log("The current answer is - ", props.answer);
        console.log("The current potential answers are - ", props.potentialAnswers);
    }, [props.answer]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [setGuess]);

    const resetImages = useCallback(() => {
      setShowCorrectImage(false);
      setShowWrongImage(false);
    }, [setShowCorrectImage, setShowWrongImage]);
  
    useEffect(() => {
      resetImages();
    }, [resetImages]);
    
    const handleSubmit: FormEventHandler = (e) => {
      e.preventDefault();

      resetImages();

      const lowerCasePotentialAnswers = props.potentialAnswers.map((answer) =>
        answer.toLowerCase()
      );

      if (lowerCasePotentialAnswers.includes(guess.toLowerCase())) 
      {
        props.onGuess(true);
        props.guesses.push({ guess, isCorrect: true });
        setGuess("");
        setShowCorrectImage(true);
      } 
      else 
      {
        props.onGuess(false);
        props.guesses.push({ guess, isCorrect: false });
        setGuess("");
        setShowWrongImage(true);
      }
      setAnimationKey(Date.now());
    }
    
    const handleChange = (e: any) => {
      setGuess(e.target.value);
    };
    
    return (
        <form className="mb-4 lg:mb-10 relative">
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
            <input
              className="text-xl p-4 py-6 text-center hover:scale-105 lg:focus:scale-110 focus:outline-none ease-in-out duration-100 border-dashed border-4 border-blue-500 placeholder:text-blue-300 w-full"
              type="text"
              id="guess"
              name="guess"
              placeholder="type answer here"
              onChange={handleChange}
              value={guess}
              ref={inputRef}
            />
          </div>

          <div>
            <input className="px-10 py-4 w-full text-center hover:scale-105 lg:hover:scale-110 ease-in-out duration-100 border-4 border-black bg-blue-500 hover:bg-blue-700 text-white rounded-full inline-block cursor-pointer shadow-lift" type="submit" value="Guess!" onClick={handleSubmit} />
          </div>
        </form>
    );
}
  