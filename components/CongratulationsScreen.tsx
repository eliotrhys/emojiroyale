import React from "react";
import Points from "./Points";

type Guess = {
  guess: string;
  isCorrect: boolean;
}

interface CongratulationsScreenProps {
  onRestart: () => void;
  finalScore: number;
  guesses: Guess[];
  count: number;
}

export default function CongratulationsScreen(props: CongratulationsScreenProps) {

  const highestScore = parseInt(localStorage.getItem("highestScore") ?? "0");

  return (
    <div className="min-h-screen min-w-screen text-center">
      <div className="container mx-auto px-4 min-h-screen">
        <div className="grid min-h-screen">

          <div className="flex flex-col justify-between">

            <div>
              <div className="w-full">
                <h1 className="huge-emoji">💩</h1>
                <h1 className="text-5xl lg:text-7xl mb-10 font-black">Time's up!</h1>
              </div>

              <div className="w-full lg:w-1/3 mx-auto ">
                <div className="mt-10">
                  <div className="mb-10">
                    
                    <div className="mb-10">
                      <Points count={props.count} guesses={props.guesses} />
                      <div className="text-4xl mb-0">🏅</div>
                      <h2 className="text-xl lg:text-xl mb-6">You scored</h2>
                      <h2 className="text-4xl lg:text-5xl mb-0 font-black">{props.finalScore} points</h2>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-4xl mb-0">🏆</div>
                    <p className="mb-0">Your highest score is</p>
                    <p className="mb-0">{highestScore} points</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 mx-auto mb-10">
              <button className="px-10 py-4 w-full text-center hover:scale-110 ease-in-out duration-100 border-4 border-black bg-blue-500 hover:bg-blue-700 text-white rounded-full inline-block" onClick={props.onRestart}>Restart Game</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}