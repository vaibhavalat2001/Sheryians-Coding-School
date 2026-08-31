import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();

  const formHandler = (e) => {
    const value = e.target;
    setData({ ...data, [value.name]: value.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const value = e.target;

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);

      for (let i = 0; i <= value.images.files.length; i++) {
        formData.append("images", value.images.files[i]);
      }

      const res = await axios.post("http://localhost:3000/create", formData);
      console.log(res);
      
    } catch (error) {
      console.log("error in api:", error);
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center items-center p-4 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-700 flex flex-col rounded-xl gap-4 p-6 border-zinc-300"
      >
        <input
          onChange={formHandler}
          name="name"
          className="pl-2 outline-none border border-zinc-500 rounded text-xl"
          type="text"
          placeholder="Enter your name"
        />
        <input
          onChange={formHandler}
          name="email"
          className="pl-2 outline-none border border-zinc-500 rounded text-xl"
          type="email"
          placeholder="Enter your email"
        />
        <input
          onChange={formHandler}
          name="images"
          className="pl-2 outline-none border border-zinc-500 rounded text-xl"
          type="file"
          multiple
          placeholder="profile image"
        />
        <button
          type="submit"
          className="bg-amber-600 active:scale-95 p-2 font-semibold text-black rounded-lg"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default App;
