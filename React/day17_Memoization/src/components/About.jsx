import React from "react";

const About = ({greet}) => {
  console.log("about rendering...");
  greet();
  return <div>About</div>;
};

export default React.memo(About)
