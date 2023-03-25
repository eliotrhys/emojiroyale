import { useEffect, useState } from "react";

interface CountdownProps {
    timeRemaining: number,
    onCountdownFinish: () => void,
    onTimeTick: () => void
}

export default function Countdown(props: CountdownProps) {

    const [danger, setDanger] = useState(false);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            props.onTimeTick();
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      // Finish & 10 second warning
      useEffect(() => {
        if (props.timeRemaining === 0) {
            setDanger(false);
            props.onCountdownFinish();
        }

        if (props.timeRemaining < 11) {
            setDanger(true);
        }
      }, [props.timeRemaining]);
      
    return (
        <div className="">
            <div className={"text-2xl py-2 my-2 px-20 lg:py-2 text-center border-4 border-black rounded-full flex items-center justify-center mx-auto w-full lift lg:w-1/2 " + (danger ? "bg-red-500 text-white danger-pulse" : "bg-white text-black")}>{props.timeRemaining}</div>
        </div>
    )
  }