import { useEffect, useState } from "react";
import Guess from "../app/types/Guess";

interface PopoverProps {
  correctAnswer?: string;
  correctAnswerEmoji?: string;
}

export default function Popover(props: PopoverProps) {

  return (
    <div className="popover rounded-md z-20">
      <div className="text-center min-w-[100px]">
        <div className="whitespace-nowrap text-5xl">{ props.correctAnswerEmoji !== undefined ? props.correctAnswerEmoji.replaceAll('/', '') : "" }</div>
        <div className="whitespace-nowrap">{ props.correctAnswer }</div>
      </div>
    </div>
  )
}