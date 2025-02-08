import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";
import Login from "./components/Login/Login";
import RegisterPage from "./components/Register/RegisterPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>

  );
}

export default App;
