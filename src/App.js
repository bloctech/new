import "./App.css";
import React from "react";
import Header from "./components/Header";
import Community from "./components/Community";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Build from "./components/Build";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/build" element={<Build />} />
        <Route exact path="/community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
