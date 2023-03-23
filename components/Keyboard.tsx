import React, { useEffect, useState } from 'react';
import Key from './Key';

type KeyboardLayout = string[][];

interface KeyboardProps {
    handleCurrentWordChange: (currentWord: string) => void;
    onEnter: () => void;
}

export default function Keyboard(props: KeyboardProps) {
  const [currentWord, setCurrentWord] = useState<string>("");

  const handleKeyPress = (letter: string) => {
    switch (letter) {
      case 'BACKSPACE':
        if (currentWord.length > 0) {
          const newCurrentWord = currentWord.slice(0, -1);
          setCurrentWord(newCurrentWord);
        }
        break;
      case 'SPACE':
        setCurrentWord((word) => word + ' ');
        break;
      case 'ENTER':
        props.handleCurrentWordChange(currentWord);
        props.onEnter();
        setCurrentWord("");
        break;
      default:
        setCurrentWord((word) => word + letter);
        break;
    }
  };

  useEffect(() => {
    props.handleCurrentWordChange(currentWord);
  }, [currentWord, props.handleCurrentWordChange]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {

      const key = event.key.toUpperCase();

      if (key === 'BACKSPACE') 
      {
        handleKeyPress('BACKSPACE');
      } 
      else if (key === 'ENTER') 
      {
        props.onEnter();
      }
      else 
      {
        handleKeyPress(key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentWord]);

  const keyboardLayout: KeyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['ENTER', 'SPACE', 'BACKSPACE']
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