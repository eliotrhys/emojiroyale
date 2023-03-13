import React from "react";

interface FailureScreenProps {
  onRestart: () => void;
}

export default function FailureScreen(props: FailureScreenProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FAIL FAIL FAIL YOU HAVE FAILED</h1>
      <button onClick={props.onRestart}>Restart Game</button>
    </div>
  );
}