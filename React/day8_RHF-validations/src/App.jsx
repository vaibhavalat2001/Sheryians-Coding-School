import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  let [users, setUsers] = useState([]);
  let [update, setUpdate] = useState({});
  let [toggle, setToggle] = useState(false);

  let del = (data) => {
    let call = users.filter((user) => user.email !== data.email);
    setUsers(call)
  };

  let up = (data) => {
    setToggle((pre) => !pre);
    setUpdate(data);
  };

  return (
    <div className="p-2 min-h-screen bg-gray-600">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="border-2 mt-6 flex justify-center flex-wrap gap-y-6 gap-x-4 border-gray-400 p-4">
          {users.map((user) => (
            <UserCard user={user} up={up} del={del} />
          ))}
        </div>
      ) : (
        <div className="h-[70%] flex justify-center items-center">
          <Form setUsers={setUsers} setToggle={setToggle} setUpdate={setUpdate} update={update} users={users}/>
        </div>
      )}
    </div>
  );
};

export default App;
