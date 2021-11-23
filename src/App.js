import React from "react";
import Header from "./components/Header";
import Community from "./components/Community";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/community" element={<Community />} />
        <Route exact path="/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
