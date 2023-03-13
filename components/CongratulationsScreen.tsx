import React from "react";

interface CongratulationsScreenProps {
  onRestart: () => void;
}

export default function CongratulationsScreen(props: CongratulationsScreenProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>WIN WIN WIN WIN YOU WIN</h1>
      <button onClick={props.onRestart}>Restart Game</button>
    </div>
  );
}