import React, { useEffect, useState } from 'react';
import Key from './Key';

type KeyboardLayout = string[][];
type KeyboardControls = string[];

interface KeyboardProps {
    handleCurrentWordChange: (currentWord: string) => void;
    onEnter: () => void;
}

export default function Keyboard(props: KeyboardProps) {

    const [currentWord, setCurrentWord] = useState<string>("");
    const [keyIsActive, setKeyIsActive] = useState(false);
    const [pressedKey, setPressedKey] = useState("");

    const handleKeyPress = async (letter: string) => {
        switch (letter) {
            case 'BACKSPACE':
                if (currentWord.length > 0) {
                    const newCurrentWord = currentWord.slice(0, -1);
                    setCurrentWord(newCurrentWord);
                }
                break;
            case ' ':
                console.log("PRESSED KEY IS: " + pressedKey);
                if (currentWord.length > 0) {
                    setCurrentWord((word) => word + ' ');
                }
                break;
            case 'ENTER':
                await props.handleCurrentWordChange(currentWord);
                await props.onEnter();
                setCurrentWord("");
                break;
            default:
                if (currentWord.length < 75)
                {
                    setCurrentWord((word) => word + letter);
                }
                break;
        }
    };

    useEffect(() => {
        props.handleCurrentWordChange(currentWord);
    }, [currentWord, props.handleCurrentWordChange]);

    // Listeners for physical keydowns
    const handleKeyDown = (event: KeyboardEvent) => {
        
        const key = event.key.toUpperCase();

        setKeyIsActive(true);

        const allowedKeys = [
        "BACKSPACE",
        "ENTER",
        " ",
        "'",
        "-",
        ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
        ...Array.from({ length: 10 }, (_, i) => String.fromCharCode(48 + i))
        ];

        if (allowedKeys.includes(key)) 
        {
            // TO DO - FIGURE OUT WHY SPACEBAR ISN'T WORKING
            if (key === " "){ console.log("ITS ALIVE THE SPACEBAR"); };

            setPressedKey(key);

            if (key === 'BACKSPACE') 
            {
                handleKeyPress('BACKSPACE');
            } 
            else if (key === 'ENTER') 
            {
                event.preventDefault();
                handleKeyPress('ENTER');
            } 
            else if (key === ' ' || key === "SPACE") 
            {
                // Stop default Spacebar scroll behaviour
                if (event.target === document.body) 
                {
                    event.preventDefault();
                }

                handleKeyPress(' ');
            }
            else 
            {
                handleKeyPress(key);
            }
        }
    };

    const handleKeyUp = () => {
        setKeyIsActive(false);
        setPressedKey("");
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    
        return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        };
    }, [currentWord, handleKeyPress]);

  const keyboardLayout: KeyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
  ];

  const keyboardControls: KeyboardControls = ['SPACE'];

    return (
        <>
            <div className="text-center bg-white border-black border-r-0 border-l-0 sm:border-r-4 sm:border-l-4 border-4 py-4 px-4 sm:rounded-md text-xl mb-4 overflow-x-scroll">{currentWord === "" ? <span className="text-blue-300">Start typing!</span> : currentWord}</div>
            <div>
                {keyboardLayout.map((row, rowIndex) => (
                <div className="flex items-center justify-center" key={rowIndex}>
                    {row.map((letter) => (
                        <Key
                            key={letter}
                            letter={letter}
                            onClick={handleKeyPress}
                            keyIsActive={keyIsActive}
                            pressedKey={pressedKey}
                            isFullWidth={false}
                        />
                    ))}
                </div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-1 mx-auto">
                {keyboardControls.map((letter, index) => (
                    <div key={index} className="w-full col-span-1 col-start-2">
                        <Key
                            key={letter}
                            letter={letter}
                            onClick={handleKeyPress}
                            keyIsActive={keyIsActive}
                            pressedKey={pressedKey}
                            isFullWidth={true}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};