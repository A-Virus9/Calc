import { useState } from "react";
import "./App.css";

export default function App() {
  const [disVal, setDisplay] = useState("0");
  const [oper, setOper] = useState("");
  const [temp, setTemp] = useState("");
  const [currentVal, setCurrent] = useState("");
  let ForVal, yo;

  const handleClick = (value) => {
    setDisplay(disVal === "0" ? value : disVal + value);
    setCurrent(currentVal + value);
  };

  const handleAC = () => {
    setDisplay("0");
    setCurrent("");
    setOper("");
    setTemp("");
  };

  const handleDel = () => {
    setDisplay(disVal === "0" ? disVal : disVal.slice(0, -1));
  };

  function checkOper() {
    if (
      disVal.slice(-1) === "+" ||
      disVal.slice(-1) === "-" ||
      disVal.slice(-1) === "*" ||
      disVal.slice(-1) === "/" ||
      disVal.slice(-1) === "%"
    ) {
      return 1;
    } 
    else {
      return 0;
    }
  }

  const handleOper = (val) => {
    if (checkOper()) {
      yo = disVal.slice(0, -1);
      setTemp(yo);
      setDisplay(yo + val);
    } else {
      setTemp(disVal);
      setDisplay(disVal + val);
    }
    setOper(val);
    setCurrent("");
  };

  const handleEqual = () => {
    if (checkOper()) {
      return;
    }
    if (oper !== "") {
      ForVal = eval(temp + oper + currentVal);
      if (!Number.isInteger(ForVal)) {
        ForVal = ForVal.toFixed(5);
      }
      setDisplay(ForVal.toString());
      setTemp(disVal);
    }
  };

  if (disVal === "") {
    setDisplay("0");
  }

  return (
    <div className="container">
      <div id="screen">
        <input type="text" value={disVal} className="input" />
      </div>
      <div id="numbers">
        <div className="buttons light" onClick={() => handleAC()}>
          AC
        </div>
        <div className="buttons light" onClick={() => handleDel()}>
          DEL
        </div>
        <div className="buttons light" onClick={() => handleOper("%")}>
          %
        </div>
        <div
          className="buttons operator orange"
          onClick={() => handleOper("/")}
        >
          ÷
        </div>
        <div className="buttons" onClick={() => handleClick("7")}>
          7
        </div>
        <div className="buttons" onClick={() => handleClick("8")}>
          8
        </div>
        <div className="buttons" onClick={() => handleClick("9")}>
          9
        </div>
        <div
          className="buttons operator orange"
          onClick={() => handleOper("*")}
        >
          x
        </div>
        <div className="buttons" onClick={() => handleClick("4")}>
          4
        </div>
        <div className="buttons" onClick={() => handleClick("5")}>
          5
        </div>
        <div className="buttons" onClick={() => handleClick("6")}>
          6
        </div>
        <div
          className="buttons operator orange"
          onClick={() => handleOper("-")}
        >
          -
        </div>
        <div className="buttons" onClick={() => handleClick("1")}>
          1
        </div>
        <div className="buttons" onClick={() => handleClick("2")}>
          2
        </div>
        <div className="buttons" onClick={() => handleClick("3")}>
          3
        </div>
        <div
          className="buttons operator orange"
          onClick={() => handleOper("+")}
        >
          +
        </div>
        <div className="buttons" onClick={() => handleClick("00")}>
          00
        </div>
        <div className="buttons" onClick={() => handleClick("0")}>
          0
        </div>
        <div className="buttons" onClick={() => handleClick(".")}>
          .
        </div>
        <div className="buttons operator orange" onClick={() => handleEqual()}>
          =
        </div>
      </div>
    </div>
  );
}