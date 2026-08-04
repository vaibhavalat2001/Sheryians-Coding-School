import React, { useState } from "react";

const Form3 = () => {
  const [formData, setFormData] = useState({});

  let handleClick = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div  className="flex flex-col p-5 w-50 gap-4">
      <h1 className="text-red-500">Better approach: using function </h1>
      <input
        onChange={handleClick}
        name="name"
        className="border px-2 rounded-lg"
        type="text"
        placeholder="name"
      />
      <input
        onChange={handleClick}
        name="email"
        className="border px-2 rounded-lg"
        type="text"
        placeholder="email"
      />
      <input
        onChange={handleClick}
        name="pass"
        className="border px-2 rounded-lg"
        type="text"
        placeholder="Password"
      />
      <h1>Name - {formData.name}</h1>
      <h1>Email - {formData.email}</h1>
      <h1>Password - {formData.pass}</h1>
    </div>
  );
};

export default Form3;
