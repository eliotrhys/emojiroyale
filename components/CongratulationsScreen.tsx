import React from "react";

interface CongratulationsScreenProps {
  onRestart: () => void;
  finalScore: number;
}

export default function CongratulationsScreen(props: CongratulationsScreenProps) {

  const highestScore = parseInt(localStorage.getItem("highestScore") ?? "0");

  return (
    <div className="min-h-screen min-w-screen text-center">
      <div className="container mx-auto px-4">
        <div className="grid min-h-screen">
            <div className="w-full lg:w-1/3 mx-auto flex flex-col justify-between min-h-screen">
              <div className="mt-10">
                <div className="mb-10">
                  <h1 className="huge-emoji">💩</h1>
                  <h1 className="text-6xl lg:text-9xl">Time's up!</h1>
                  <h2 className="text-3xl mb-0">You're all oot of time.</h2>
                </div>
                
                <div>
                  <p className="mb-10">You scored: {props.finalScore}</p>

                  <p>Your highest score so far: {highestScore}</p>
                </div>
              </div>
              
              <div className="mb-10">
                <button className="px-10 py-4 w-full text-center hover:scale-110 ease-in-out duration-100 border-4 border-black bg-blue-500 hover:bg-blue-700 text-white rounded-full inline-block" onClick={props.onRestart}>Restart Game</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}