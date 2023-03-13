import { useEffect, useState } from "react";

type Guess = {
  guess: string;
  isCorrect: boolean;
}

interface PointsProps {
  count: number;
  guesses: Guess[];
}

export default function Points(props: PointsProps) {

  const answers = props.guesses.map((guess, index) => 
    guess.isCorrect ? <div key={index} className="h-8 w-8 p-2 mx-2 border-4 border-black bg-green-500 rounded-full"></div> :
    <div key={index} className="h-8 w-8 p-2 mx-2 border-4 border-black bg-red-500 rounded-full"></div>
  );

  return (
    <div className="mb-10 h-8">
      <div className="flex justify-center">

        { answers }

      </div>
    </div>
  )
}