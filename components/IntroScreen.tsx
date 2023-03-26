import { motion } from "framer-motion";
import React, { useEffect } from "react";

interface IntroScreenProps {
  introTimeRemaining: number;
  onCountdownFinish: () => void;
  onIntroTimeTick: () => void;
  isSuddenDeath: boolean;
}

export default function IntroScreen(props: IntroScreenProps) {

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
        props.onIntroTimeTick();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (props.introTimeRemaining === 0) {
      props.onCountdownFinish();
    }
  }, [props.introTimeRemaining]);

  return (
    <div className={`min-h-screen min-w-screen text-center flex items-center justify-center ${ props.isSuddenDeath ? "bg-black" : "" }`}>
      <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-full">
                <motion.div
                  animate={{ y: [-800, 0]} } 
                  transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                >
                  <div className="animate-bounce">
                    { props.isSuddenDeath ? 
                      <div>
                        <h1 className="huge-emoji">☠️</h1>
                        <h1 className="text-md lg:text-4xl -mt-10 mb-20 text-red-600">NO SECOND CHANCES</h1>
                      </div>
                      :
                      <div>
                        <h1 className="huge-emoji">⏰</h1>
                        <h1 className="text-md lg:text-4xl -mt-10 mb-20">Let the countdown begin!</h1>
                      </div>
                  }
                    
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [-800, 0]} } 
                  transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
                >
                  <h1 className={`text-5xl lg:text-9xl mb-10 ${ props.isSuddenDeath ? "text-red-600" : "text-black" } font-black animate-bounce`}>{ props.introTimeRemaining }</h1>
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
