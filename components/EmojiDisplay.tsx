import React from "react";

interface EmojiDisplayProps {
  emoji: string,
  mediaType: string
}

export default function EmojiDisplay(props: EmojiDisplayProps) {

  
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

  return (
      <div className="mb-0 lg:mb-20 mx-auto text-center">
        <div className="text-lg lg:text-xl text-center border-4 border-lime-500 text-lime-500 bg-lime-100 px-6 inline-block rounded-md p-2 text-center mb-10">{props.mediaType}</div>
        <div className="flex justify-center">
          {finalEmojis.map((emoji: string, index: number) => (
            <div key={index} className="text-6xl md:text-8xl lg:text-9xl mb-10 hover:scale-125 hover:rotate-[15deg] ease-in-out duration-100 mx-2 lg:mx-4 hover:cursor-pointer">
              {emoji}
            </div>
          ))}
        </div>
      </div>
  )
}