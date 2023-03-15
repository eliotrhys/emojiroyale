import React from "react";
import Points from "./Points";

interface CountdownScreenProps {
  introCount: number;
}

export default function CountdownScreen(props: CountdownScreenProps) {

  return (
    <div className="h-screen w-screen text-center flex items-center justify-center">
      <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-full">
                <h1 className="huge-emoji animate-bounce">⏰</h1>
                <h1 className="text-5xl lg:text-9xl mb-10 font-black">{ props.introCount }</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}