import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor1 = () => {
    setCar((previousState) => {
      return { ...previousState, color: "red" };
    });
  };

  const updateColor2 = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor1}>
        Red
      </button>
      <button type="button" onClick={updateColor2}>
        Blue
      </button>
    </>
  );
}

export default Car;
