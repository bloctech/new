import "./App.css";
import React from "react";
import Header from "./components/Header";
import Community from "./components/Community";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Build from "./components/Build";
import RoadMap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/build" element={<Build />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/roadmap" element={<RoadMap />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
