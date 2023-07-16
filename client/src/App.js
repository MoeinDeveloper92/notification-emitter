import React from "react";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./routes/About";
function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
