import { FormEventHandler, useEffect, useState } from "react";

type Guess = {
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

    useEffect(() => {
        console.log("The current answer is - ", props.answer);
        console.log("The current potential answers are - ", props.potentialAnswers);
    }, [props.answer]);
    
    const handleSubmit: FormEventHandler = (e) => {
      e.preventDefault();

      const lowerCasePotentialAnswers = props.potentialAnswers.map((answer) =>
        answer.toLowerCase()
      );

      if (lowerCasePotentialAnswers.includes(guess.toLowerCase())) 
      {
        console.log("ITS A MATCH");
        props.onGuess(true);
        props.guesses.push({ guess, isCorrect: true });
        setGuess("");
      } 
      else 
      {
        console.log("EPIC FAIL");
        props.onGuess(false);
        props.guesses.push({ guess, isCorrect: false });
        setGuess("");
      }
    }
    
    const handleChange = (e: any) => {
      setGuess(e.target.value);
    };
    
    return (
        <form className="mb-10 bg-slate-100">
          <div className="mb-10">
            <input
              className="text-xl p-4 py-6 text-center focus:scale-110 focus:outline-none ease-in-out duration-100 border-dashed border-4 text-blue-500 border-blue-500 placeholder:text-blue-300 w-full"
              type="text"
              id="guess"
              name="guess"
              placeholder="type answer here"
              onChange={handleChange}
              value={guess}
            />
          </div>

          <div>
            <input className="px-10 py-4 w-full text-center hover:scale-110 ease-in-out duration-100 border-4 border-black bg-blue-500 hover:bg-blue-700 text-white rounded-full inline-block" type="submit" value="Guess!" onClick={handleSubmit} />
          </div>
        </form>
    );
}
  