import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  let [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || [],
  );
  let [update, setUpdate] = useState(null);
  let [toggle, setToggle] = useState(true);

  let del = (id) => {
    let call = users.filter((val) => val.id !== id);
    setUsers(call);
    localStorage.setItem("users", JSON.stringify(call));
  };

  let up = (user) => {
    setToggle((pre) => !pre);
    setUpdate(user);
  };

  return (
    <div className="p-2 min-h-screen bg-gray-600">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="border-2 border-zinc-500 mt-6">
          <h1 className="text-white text-4xl font-semibold text-center">
            User card
          </h1>
          <div className=" flex justify-center items-center flex-wrap gap-y-6 gap-x-4 border-gray-400 p-4">
            {users.map((user) => (
              <UserCard key={user.id} user={user} up={up} del={del} />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[70%] flex justify-center items-center">
          <Form
            setUsers={setUsers}
            setToggle={setToggle}
            setUpdate={setUpdate}
            update={update}
            users={users}
          />
        </div>
      )}
    </div>
  );
};

export default App;
