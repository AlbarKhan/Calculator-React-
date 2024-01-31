import { useState } from "react";
import "./index.css";
const btn = [
  "C",
  "=",
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
  const [calinput, setInput] = useState("0");
  const [result, setResult] = useState("");

  function handleClick(value) {
    if (value === "=") {
      // const evaluateExpression = eval(ClipboardEvent).to;
      setResult(eval(calinput).toString());
    } else {
      setInput((prevInput) => prevInput + value);
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <p className="result">{result}</p>
        <input className="input-value" value={calinput} readOnly></input>
        {/* <p className="input-value">10+10+9010+10+9010+10+9010+10+9010+10+90</p> */}
      </div>
      <div className="Buttons">
        {btn.map((bt) => (
          <button key={bt} onClick={() => handleClick(bt)}>
            {bt}
          </button>
        ))}
      </div>
    </div>
  );
}
