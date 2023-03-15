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
            console.log("DANGER IS NOW " + danger);
        }
      }, [props.timeRemaining]);
      
    return (
        <div className="mb-4 lg:mb-6 flex justify-center">
            <div className={"text-2xl px-10 py-4 pt-8 text-center border-4 border-black rounded-full inline-block mx-auto w-full lg:w-1/2 " + (danger ? "bg-red-500 text-white danger-pulse" : "bg-white text-black")}>{props.timeRemaining}</div>
        </div>
    )
  }