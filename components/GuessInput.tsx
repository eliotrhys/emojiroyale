import { FormEventHandler, useEffect, useState } from "react";

interface GuessInputProps {
  answer: string;
  onCorrectGuess: () => void;
  onIncorrectGuess: () => void;
}
export default function GuessInput(props: GuessInputProps) {
      
    const [guess, setGuess] = useState("");

    useEffect(() => {
        console.log("The current answer is - ", props.answer);
    }, [props.answer]);
    
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log("The current answer is - ", props.answer);
        console.log("THE CURRENT GUESS IS - ", guess);
    
        if (guess.toLowerCase() === props.answer.toLowerCase()) {
            props.onCorrectGuess();
            setGuess("");
          } 
          else 
          {
            setGuess("");
            props.onIncorrectGuess();
          }
    };
    
    const handleChange = (e: any) => {
        setGuess(e.target.value);
    };
    
    return (
        <form>
          <input
            className="text-4xl p-4 text-center border-dashed border-2 border-indigo-600"
            type="text"
            id="guess"
            name="guess"
            placeholder="enter answer here"
            onChange={handleChange}
            value={guess}
          />

          <div>
            <input type="submit" value="SUBMIT" onClick={handleSubmit} />
          </div>
        </form>
    );
}
  