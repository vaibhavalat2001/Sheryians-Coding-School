import React from "react";

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <form className="flex gap-6 justify-center items-center flex-col">
        <input className="border rounded-lg text-center" type="file" placeholder="images upload" />
        <button className="active:scale-90 border w-20 rounded-2xl">Upload</button>
      </form>
    </div>
  );
};

export default App;
