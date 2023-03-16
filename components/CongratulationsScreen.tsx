import { motion } from "framer-motion";
import React from "react";
import Points from "./Points";

interface Guess {
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
    <div className="h-[calc(100vh-56px)] min-w-screen text-center">
      <div className="container mx-auto px-4 h-full">
        <div className="grid h-full">

          <div className="flex flex-col justify-between">

            <div>
              <div className="w-full">
                <motion.div 
                  animate={{ x: [-800, 0]} } 
                  transition={{ type: "spring", bounce: 0.4, duration: 0.4 }}
                >
                  <h1 className="huge-emoji -mb-10">💩</h1>
                  <h1 className="text-2xl lg:text-5xl mb-0 lg:mb-10 font-black">Time's up!</h1>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/3 mx-auto">
                <div className="mt-10">
                    
                  <motion.div className="mb-4 lg:mb-10 bg-white border-black border-4 rounded-lg text-center" 
                    animate={{ x: [-800, 0]} } 
                    transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                  >
                    <div className="flex items-center justify-center border-b-4 pt-4 pb-4 border-black">
                      <div className="text-4xl">🏅</div>
                      <h2 className="text-xl lg:text-xl">You scored</h2>
                    </div>
                    
                    { props.count > 0 && 
                      <div className="py-4 lg:py-6 border-black border-b-4">
                        <Points count={props.count} guesses={props.guesses} />
                      </div>
                    }
                    
                    <div className="">
                      <div className="bg-violet-500 p-4 text-center ">
                        <h2 className="text-xl lg:text-4xl font-black text-white">{props.finalScore} {props.finalScore > 1 || props.finalScore === 0 ? "points" : "point"}</h2>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ x: [-800, 0]} } 
                    transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
                  >
                    <div className="text-4xl mb-0">🏆</div>
                    <p className="mb-0">Your highest score is</p>
                    <p className="mb-0">{highestScore} {highestScore > 1 || highestScore === 0 ? "points" : "point"}</p>
                  </motion.div>

                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 mx-auto mb-10">
              <motion.div
                animate={{ x: [-800, 0]} } 
                transition={{ type: "spring", bounce: 0.4, duration: 1.6 }}
              >
                <button className="px-10 py-4 w-full text-center hover:scale-110 ease-in-out duration-100 border-4 border-black bg-blue-500 hover:bg-blue-700 text-white rounded-full inline-block" onClick={props.onRestart}>Restart Game</button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}