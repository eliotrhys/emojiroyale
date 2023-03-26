import { useState } from "react";

interface KeyProps {
  letter: string;
  onClick: (letter: string) => void;
  keyIsActive: boolean;
  pressedKey: string;
  isFullWidth: boolean;
}

export default function Key(props: KeyProps){

  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    event.preventDefault();
    setIsActive(true);
    
    if (props.onClick) {
      props.onClick(props.letter);
    }
  };
  
  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsActive(false);
  };

  return (
    <>
      <button
        className={`text-xl px-1 py-1 mx-0.5 my-0.5 lg:mx-1 lg:my-1 first:ml-0 last:mr-0 bg-white text-black border-2 border-black rounded-md flex items-center justify-center lg:w-auto lg:min-w-[40px]
        ${
          props.keyIsActive && props.pressedKey === props.letter || isActive ? "!bg-yellow-300 scale-125" : ""
        }
        ${
          props.isFullWidth ? "!w-full" : ""
        }
        ${
          props.letter.toUpperCase() === "ENTER" ? "!text-xs !px-1 !my-0" : ""
        }
        `
      }
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      >
      {props.letter !== "BACKSPACE" ? <div>{props.letter}</div> : <div className="h-full w-full flex items-center justify-center"><div><img src={"/images/delete-left-solid.svg"} className="h-6" /></div></div>}
    </button>
    </>
  )
};