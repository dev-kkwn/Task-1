import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Signup" element={<SignUp/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
