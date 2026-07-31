import React from "react";

const UserCard = ({ user, del, up }) => {
  return (
    <div className="bg-black text-white flex p-4 rounded gap-3 border flex-col w-60 flex-wrap">
      <div className="flex justify-center w-50">
        <img
          className="object-cover w-full h-50 rounded-xl"
          src={user.img}
          alt=""
        />
      </div>
      <div className="w-full">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.mobile}</p>
      </div>
      <div className="justify-between flex">
        <button
          onClick={() => up(user)}
          className="active:scale-90 cursor-pointer bg-yellow-600 py-1 px-2 rounded"
        >
          Update
        </button>
        <button
          onClick={() => del(user)}
          className="active:scale-90 cursor-pointer bg-red-600 py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
