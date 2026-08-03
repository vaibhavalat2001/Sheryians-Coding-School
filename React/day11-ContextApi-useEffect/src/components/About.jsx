import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";

const About = () => {
  console.log("About rendering...");
  // const {count} =  useContext(MyStore);

  let interval = setInterval(() => {
    console.log("hey");
  }, 1000);

  useEffect(() => {
    console.log("about page come");

    // execute when about page unmount
    // only use when componenet leaks memory
    // and if you track update
    return () => {
      console.log("About page is going");
      clearInterval(interval);
    };
  }, []);
  return <div>About</div>;
};

export default About;
