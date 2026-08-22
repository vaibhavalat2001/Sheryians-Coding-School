import React from "react";
import Lightfall from "./Lightfall";

const App = () => {
  return (
    <div className="relative w-screen h-screen">

      {/* Background */}
      <Lightfall
         className=""
        colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
        backgroundColor="#0A29FF"
        speed={0.5}
        streakCount={2}
        streakWidth={1}
        streakLength={1}
        glow={1}
        density={0.6}
        twinkle={1}
        zoom={3}
        backgroundGlow={0.5}
        opacity={1}
        mouseInteraction
        mouseStrength={0.5}
        mouseRadius={1}
      />

      {/* Your Website */}
      <div className="text-red-800 absolute top-0 flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold">
          Hello Vaibhav
        </h1>
      </div>

    </div>
  );
};

export default App;