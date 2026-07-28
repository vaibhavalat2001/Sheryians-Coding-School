import React from "react";
import { Route, Routes } from "react-router";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
};

export default App;
