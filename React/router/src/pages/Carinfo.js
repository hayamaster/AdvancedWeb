import React from "react";

const cars = [
  { name: "Grandeur", price: 5600, etc: "Economic cost Funct" },
  { name: "BMW", price: 7800, etc: "ional excellence Grac" },
  { name: "Genesis", price: 8000, etc: "eful Design" },
];

const CarItem = ({ car }) => (
  <div>
    {car.name} {car.price} {car.etc}
  </div>
);

const Car = () => {
  return (
    <div>
      <h2>Car Information</h2>
      {cars.map((car) => (
        <CarItem car={car} />
      ))}
    </div>
  );
};

export default Car;
