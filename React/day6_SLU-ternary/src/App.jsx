import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/register";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-400 flex flex-col gap-4 min-h-screen p-5">
      {toggle ? (
        <Register setUsers={setUsers} setToggle={setToggle} />
      ) : (
        <Login setToggle={setToggle}/>
      )}
      <div className="flex flex-wrap gap-4">
        {users.map((ele, ind) => {
          return <UserCard key={ind} user={ele} />;
        })}
      </div>
    </div>
  );
};

export default App;
