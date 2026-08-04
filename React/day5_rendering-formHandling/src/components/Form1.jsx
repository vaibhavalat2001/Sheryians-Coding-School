import React, { useState } from "react";

// Bruteforce Approch: that much input that much useState
const Form1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="flex flex-col p-5 w-50 gap-4">
      <h1 className="text-red-500">Bruteforce Approach:</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        className="border rounded px-2"
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-2"
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        className="border rounded px-2"
        type="text"
        placeholder="password"
        name=""
        id=""
      />
      <h1>Name - {name}</h1>
      <h1>Email - {email}</h1>
      <h1>Password - {pass}</h1>
    </div>
  );
};

export default Form1;
