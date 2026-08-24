import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="">
      <div>This is my dashborad home page</div>
      <button onClick={() => handleTheme()}>Change theme</button>
    </div>
  );
};

export default HomePage;
