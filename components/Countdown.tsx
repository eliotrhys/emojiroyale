import { useEffect } from "react";

interface CountdownProps {
    timeRemaining: number,
    onCountdownFinish: () => void,
    onTimeTick: () => void
}

export default function Countdown(props: CountdownProps) {

    useEffect(() => {
        const timer = setInterval(() => {
            props.onTimeTick();
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      useEffect(() => {
        if (props.timeRemaining === 0) {
          props.onCountdownFinish();
        }
      }, [props.timeRemaining]);
      
    return (
        <div>
            <p>Time remaining: {props.timeRemaining}</p>
        </div>
    )
  }