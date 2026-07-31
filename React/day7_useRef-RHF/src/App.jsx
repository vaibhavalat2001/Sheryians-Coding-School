import React, { useRef, useState } from "react";
import Form from "./components/Form";
import RHF from "./components/RHF";
import UI from "./components/UI";

const App = () => {
  let [user, setUser] = useState([]);

  console.log(user);

  return (
    <div className="p-5 bg-gray-500 min-h-screen text-white">
      {/* <Form/> */}
      <RHF setUser={setUser}/>
      {/* {user.map((user) => (
        <UI user={user}/>
      ))} */}
    </div>
  );
};

export default App;
