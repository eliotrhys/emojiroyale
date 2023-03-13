import React from "react";

interface EmojiDisplayProps {
  emoji: string,
  mediaType: string
}

export default function EmojiDisplay(props: EmojiDisplayProps) {
  return (
      <div>
          <p>Media type: {props.mediaType}</p>
          <h1>{props.emoji}</h1>
      </div>
  )
}