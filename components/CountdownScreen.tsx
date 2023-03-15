import React from "react";
import Points from "./Points";

interface CountdownScreenProps {
  introCount: number;
}

export default function CountdownScreen(props: CountdownScreenProps) {

  return (
    <div className="min-h-screen min-w-screen text-center">
      <div className="container mx-auto px-4 min-h-screen">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-full">
                <h1 className="huge-emoji">💩</h1>
                <h1 className="text-5xl lg:text-5xl mb-10 font-black">{ props.introCount }</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}