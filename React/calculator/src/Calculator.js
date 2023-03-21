import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  const [mul, setMul] = useState(0);
  const [div, setDiv] = useState(0);

  const handleNum1Change = (event) => setNum1(event.target.value);
  const handleNum2Change = (event) => setNum2(event.target.value);
  const addHandler = () => setAdd(parseInt(num1) + parseInt(num2));
  const subHandler = () => setSub(parseInt(num1) - parseInt(num2));
  const mulHandler = () => setMul(parseInt(num1) * parseInt(num2));
  const divHandler = () => setDiv(Math.round(parseInt(num1) / parseInt(num2)));

  return (
    <div align="center">
      <h2> GCU Calculator </h2>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />

      <p>
        <button onClick={addHandler}> Add </button> {add}{" "}
        <button onClick={subHandler}> Sub </button> {sub}{" "}
        <button onClick={mulHandler}> Mul </button> {mul}{" "}
        <button onClick={divHandler}> Div </button> {div}
      </p>
    </div>
  );
};

export default Calculator;
