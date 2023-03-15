function Car(props) {
  return <h2>{props.brand.model} lives in my garage!</h2>;
}

function Garage() {
  //   const carName = "Ford";
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}

export default Garage;
