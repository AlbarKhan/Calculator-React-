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
        <p className="result">9</p>
        <input
          className="input-value"
          value={"0 + 10 + 9010 + 10 + 9010 + 10 + 9010 + 10 + 9010 + 10 + 90"}
          readOnly
        ></input>
        {/* <p className="input-value">10+10+9010+10+9010+10+9010+10+9010+10+90</p> */}
      </div>
      <div className="Buttons">
        {btn.map((bt) => (
          <button>{bt}</button>
        ))}
      </div>
    </div>
  );
}
