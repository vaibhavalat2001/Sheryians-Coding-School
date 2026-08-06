import React, { useRef, useState } from "react";
import Form from "./components/Form";
import RHF from "./components/RHF";
import UseRefUi from "./components/UseRefUI";
import RHFUI from "./components/RHFUI";

const App = () => {
  let [user, setUser] = useState([]);
console.log(user)
  return (
    <div className="p-5 bg-gray-500  flex-wrap min-h-screen text-white">
      {/* userRef implemention  */}
      {/* <h1 className="text-3xl">useRef form:</h1>
      <Form setUser={setUser} />
      {user.map((user, ind) => (
        <UseRefUi key={ind} user={user} />
      ))} */}

      {/* react hook form implementation */}
      <h1 className="text-3xl mt-10">React hook form:</h1>
      <RHF setUser={setUser}/>
      {user.map((user, ind) => (
        <RHFUI key={ind} user={user} />
      ))}
    </div>
  );
};

export default App;
