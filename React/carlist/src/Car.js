import React from "react";

const cars = [
  { id: 1, name: "GRANDEUR", price: 4500, etc: "Graceful design" },
  { id: 2, name: "BMW", price: 7800, etc: "Functional of high level" },
  { id: 3, name: "PEUGEOT", price: 5000, etc: "A good ride" },
  { id: 4, name: "SELTOS", price: 2600, etc: "Sport Utility Vehicle" },
  { id: 5, name: "GENESIS", price: 6700, etc: "Popular Car" },
];

const CarItem = ({ car }) => (
  <div>
    <b>[{car.id}] </b>
    <span>
      {car.name} {car.price} {car.etc}
    </span>
  </div>
);

const Car = () => {
  return (
    <div>
      <h2> Car List </h2>
      {cars.map((car) => (
        <CarItem car={car} />
      ))}
    </div>
  );
};

export default Car;
