import React from "react";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./routes/Profile";
function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
