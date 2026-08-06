import React from "react";

const RHFUI = ({user}) => {
    console.log(user)
  return (
    <div className="bg-zinc-800 mt-10 border w-50 p-2 rounded">
      <div>
        <img className="w-full h-50 rounded" src={user.img} alt="" />
      </div>
      <div>
        <h1>Product: {user.proName}</h1>
        <p>Price: {user.price}</p>
        <p>Category: {user.cat}</p>
      </div>
    </div>
  );
};

export default RHFUI;
