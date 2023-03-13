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
      <div className="mb-20">
        <div className="flex justify-center">
          {finalEmojis.map((emoji: string, index: number) => (
            <div key={index} className="text-7xl lg:text-9xl mb-10 hover:scale-125 hover:rotate-[15deg] ease-in-out duration-100 mx-4 hover:cursor-pointer">
              {emoji}
            </div>
          ))}
        </div>
        <div className="text-lg lg:text-xl text-center">{props.mediaType}</div>
      </div>
  )
}