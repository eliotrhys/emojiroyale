import React, { useState } from 'react';
import Key from './Key';

type KeyboardLayout = string[][];

export default function Keyboard() {
  const [currentWord, setCurrentWord] = useState<string>("THIS IS THE CURRENT WORD");

  const handleKeyPress = () => {
    // event.preventDefault();
    console.log("HITTING THE KEY FROM THE PARENT");
    // setCurrentWord((word) => word + key);
    // onKeyPress(key);
  };

  const keyboardLayout: KeyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
  ];

  return (
    <>
      <div className="text-center">{currentWord}</div>
      <div>
        {keyboardLayout.map((row, rowIndex) => (
          <div className="flex items-center justify-center" key={rowIndex}>
            {row.map((letter) => (
              <Key
              key={letter}
              letter={letter}
              onClick={handleKeyPress}
            />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};