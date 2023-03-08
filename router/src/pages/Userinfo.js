import React from "react";

const user1 = {
  name: "gachon Kim",
  product: "Grandeur XG Pric",
  e: 5500,
  date: "2023-03-02",
};

const User = () => {
  return (
    <div>
      <h2>Customer Information</h2>
      <p>
        Customer name : {user1.name}
        <br />
        Product : {user1.product}
        <br />e : {user1.e}
        <br />
        Date : {user1.date}
        <br />
      </p>
    </div>
  );
};

export default User;
