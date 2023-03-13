import React from "react";

interface CongratulationsScreenProps {
  onRestart: () => void;
  currentScore: number;
}

export default function CongratulationsScreen(props: CongratulationsScreenProps) {

  const highestScore = parseInt(localStorage.getItem("highestScore") ?? "0");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>WIN WIN WIN WIN YOU WIN</h1>
      <p>You scored {props.currentScore} point</p>
      <p>Your highest score so far: {highestScore} point/s</p>
      <button onClick={props.onRestart}>Restart Game</button>
    </div>
  );
}