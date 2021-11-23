import "./App.css";
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
        <Route exact path="/community" component={Community} />
        <Route exact path="/about" component={About} />
      </Routes>
      <About />
    </>
  );
}

export default App;
