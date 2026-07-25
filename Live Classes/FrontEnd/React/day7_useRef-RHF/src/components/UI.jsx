import React from "react";

const UI = ({user}) => {
    console.log(user)
  return (
    <div className="bg-gray-300 mt-10 border w-50 p-2 rounded">
      <div>
        <img className="w-full h-50 rounded" src={user.img} alt="" />
      </div>
      <div>
        <h1>product name</h1>
        <p>price</p>
        <p>category</p>
      </div>
    </div>
  );
};

export default UI;
