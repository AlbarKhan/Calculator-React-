import { useState } from "react";
import "./index.css";
const btn = [
  "C",
  "%",
  "/",
  "X",
  "-",
  "+",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
export default function App() {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
}

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">
        <p className="input-value">Input Value</p>
        <p className="reuslt">9</p>
      </div>
      <div className="Buttons">
        {btn.map((bt) => (
          <button>{bt}</button>
        ))}
      </div>
    </div>
  );
}
