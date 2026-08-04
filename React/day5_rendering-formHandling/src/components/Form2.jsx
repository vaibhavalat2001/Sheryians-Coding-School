import React, { useState } from "react";

// Better Approch: using object in only one useState
const Form2 = () => {
  const [formData, setFormData] = useState({});

  console.log(formData);
  return (
    <div className="flex flex-col p-5 w-50 gap-4">
      <h1 className="text-red-500">Better Approach:</h1>
      <input
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="border rounded px-2"
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="border rounded px-2"
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setFormData({...formData, pass: e.target.value})}
        className="border rounded px-2"
        type="text"
        placeholder="password"
        name=""
        id=""
      />
    <h1>Name - {formData.name}</h1>
    <h1>Email - {formData.email}</h1>
    <h1>Password - {formData.pass}</h1>
    </div>
  );
};

export default Form2;
