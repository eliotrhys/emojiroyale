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
            console.log("YOU GOT IT!!!!");
            props.onCorrectGuess();
            setGuess("");
          } 
          else 
          {
            console.log("Failure!");
            setGuess("");
            props.onIncorrectGuess();
          }
    };
    
    const handleChange = (e: any) => {
        setGuess(e.target.value);
        console.log("value is:", e.target.value);
    };
    
    return (
        <form>
          <input
            type="text"
            id="guess"
            name="guess"
            placeholder="enter answer here"
            onChange={handleChange}
            value={guess}
          />
    
          <h2>Guess: {guess}</h2>
          <input type="submit" value="SUBMIT" onClick={handleSubmit} />
        </form>
    );
}
  