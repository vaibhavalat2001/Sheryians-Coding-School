import React, { useState } from "react";

const Form3 = () => {
  const [formData, setFormData] = useState({});
  let handleClick = (e) => {
    let {name, value} = e.target;
    setFormData({...formData, [name]: value});
};

  return (
    <div className="flex p-5 flex-col gap-4">
      <input
        onChange={handleClick}
        name="name"
        className="border w-50 rounded-lg"
        type="text"
        placeholder="name"
      />
      <input
        onChange={handleClick}
        name="email"
        className="border w-50 rounded-lg"
        type="text"
        placeholder="email"
      />
      <input
        onChange={handleClick}
        name="pass"
        className="border w-50 rounded-lg"
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
