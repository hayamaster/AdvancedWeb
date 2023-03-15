import React from "react";
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  const onClick1 = () => setColor("red");
  const onClick2 = () => setColor("blue");
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={onClick1}>
        Red
      </button>
      <button type="button" onClick={onClick2}>
        Blue
      </button>
    </>
  );
}

export default FavoriteColor;
