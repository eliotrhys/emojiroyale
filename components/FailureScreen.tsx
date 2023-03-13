import React from "react";

interface FailureScreenProps {
  onRestart: () => void;
}

export default function FailureScreen(props: FailureScreenProps) {

  const highestScore = parseInt(localStorage.getItem("highestScore") ?? "0");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>OOF! YOU GOT ONE WRONG!</h1>
      <p>Your highest score so far: {highestScore}</p>
      <button onClick={props.onRestart}>Restart Game</button>
    </div>
  );
}