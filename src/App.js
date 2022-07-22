<<<<<<< HEAD
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Landingpage from "./components/Landingpage/Landingpage";
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';
>>>>>>> 63f85e2ff7b7e87e769c6f931d3b2e936c3f0cb6

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
