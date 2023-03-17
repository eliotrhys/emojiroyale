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

  useEffect(() => {
    setAnimate(true);
  }, []);
  
  const hasMultiCharEmoji = (str: string) => {

    // Check for multi-character emoji
    const emojiRegex = /\p{Emoji}/gu;
    const matches = str.match(emojiRegex);

    // If Yes
    if (!matches) 
    {
      const regex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27FF])/g;
      const emojis = str.match(regex) || [];
      return emojis;
    }

    // If No
    for (const match of matches) {
      if (match.length > 1) {
        const regex = /([\p{Emoji_Modifier_Base}\uFE0F]|\p{Emoji_Presentation})[\u200D\p{Emoji_Presentation}\p{Emoji_Modifier}]*|\p{Emoji}/gu;
        const emojis = str.match(regex) || [];
        return emojis;
      }
    }

    const regex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27FF])/g;
    const emojis = str.match(regex) || [];
    return emojis;
  }

  const finalEmojis = hasMultiCharEmoji(props.emoji);
  console.log(finalEmojis);

  return (
      <div className="mb-0 lg:mb-20 mx-auto text-center">
        <div className="text-lg lg:text-xl text-center border-4 border-emerald-600 text-emerald-600 bg-emerald-100 px-6 inline-block rounded-md p-2 text-center mb-10 menuMediaType">{props.mediaType}</div>
        <div className="flex items-center justify-center">
          {finalEmojis.map((emoji: string, index: number) => (
            <div key={index}>
              <div className={`animate ${animate ? 'grow-shrink' : ''} text-6xl md:text-8xl lg:text-9xl mb-10 hover:scale-125 hover:rotate-[15deg] ease-in-out duration-100 mx-2 lg:mx-4 cursor-pointer`}>
                {emoji}
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}