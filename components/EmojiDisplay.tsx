import React from "react";

interface EmojiDisplayProps {
  emoji: string,
  mediaType: string
}

export default function EmojiDisplay(props: EmojiDisplayProps) {
  return (
      <div className="mb-20">
          <div className="p-2 px-4 text-white inline-block text-center rounded-md bg-indigo-600">{props.mediaType}</div>
          <h1 className="text-9xl mb-0">{props.emoji}</h1>
      </div>
  )
}