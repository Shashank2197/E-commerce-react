import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Landingpage from "./components/Landingpage/Landingpage";

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
