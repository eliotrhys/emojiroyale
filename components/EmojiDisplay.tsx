import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface EmojiDisplayProps {
  emoji: string,
  mediaType: string
}

const variants = {
  hidden: { opacity: 0 },
  showing: {
      opacity: 1,
      transition: {
          staggerChildren: 0.2
      }
  }
}

const animationItem = {
  hidden: {
      opacity: 0,
      scale: 0
  },
  showing: {
      opacity: 1,
      scale: 1,
      transition: {
          duration: 0.3,
          type: "spring", 
          bounce: 0.4
      }
  }
}

export default function EmojiDisplay(props: EmojiDisplayProps) {

  const [animate, setAnimate] = useState(false);
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    // Define a function to toggle the grow-shrink animation class on and off
    const toggleAnimation = () => {
      setAnimationKey(Date.now());
      setAnimate(true);
      // Remove the animation class after the animation is complete
      setTimeout(() => setAnimate(false), 1000);
    };

    // Call the toggleAnimation function every 10 seconds
    const intervalId = setInterval(toggleAnimation, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  
  function splitByForwardSlash(str: string): string[] {
    return str.split('/').filter((s) => s !== '');
  }

  const finalEmojis = splitByForwardSlash(props.emoji);
  console.log(finalEmojis);

  return (
      <div className="mb-0 lg:mb-20 mx-auto text-center">
        <div
        key={animationKey}
        className={`text-lg lg:text-xl text-center border-4 border-emerald-600 text-emerald-600 bg-emerald-100 px-6 inline-block rounded-md p-2 text-center mb-10 menuMediaType ${
          animate ? "grow-shrink" : ""
        }`}
      >
        {props.mediaType}
      </div>
        <div className="flex items-center justify-center">
          {finalEmojis.map((emoji: string, index: number) => (
            <div key={index}>
              <div
                key={animationKey}
                className={`animate ${
                  animate ? "grow-shrink" : ""
                } text-6xl md:text-8xl lg:text-9xl mb-10 hover:scale-125 hover:rotate-[15deg] ease-in-out duration-100 mx-2 lg:mx-4 cursor-pointer`}
              >
                {emoji}
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}