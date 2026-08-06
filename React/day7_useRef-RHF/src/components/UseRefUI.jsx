import React from "react";

const UseRefUi = ({ user }) => {
  console.log(user);
  return (
    <div className="bg-zinc-600 mt-10 border w-60 p-2 rounded">
      <div>
        <img className="w-full h-60 rounded" src={user.img.value} alt="" />
      </div>
      <div className="px-2">
        <h1>Product: {user.productName.value}</h1>
        <p>Price: {user.price.value} rs</p>
        <p>Category: {user.cat.value}</p>
      </div>
    </div>
  );
};

export default UseRefUi;
