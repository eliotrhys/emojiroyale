import { useEffect, useState } from "react";

interface Guess {
  guess: string;
  isCorrect: boolean;
}

interface PointsProps {
  count: number;
  guesses: Guess[];
}

export default function Points(props: PointsProps) {

  const answers = props.guesses.map((guess, index) => 
    guess.isCorrect ? <div key={index} className="h-4 w-4 lg:h-8 lg:w-8 p-2 my-2 mx-2 border-4 border-black bg-green-500 rounded-full"></div> :
    <div key={index} className="h-4 w-4 lg:h-8 lg:w-8 p-2 my-2 mx-2 border-4 border-black bg-red-500 rounded-full"></div>
  );

  return (
    <div className="min-h-6 lg:min-h-8">
      <div className="flex justify-center flex-wrap">
        { answers }
      </div>
    </div>
  )
}