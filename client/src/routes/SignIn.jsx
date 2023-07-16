import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { name, email, password } = formData;
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((preState) => ({
      ...preState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //when we submit we send it to /users
  };
  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
    >
      <div className=" w-3/4 mx-auto mt-20 border-2 border-black p-5 rounded-md ">
        <h1 className="text-center p-2 font-bold text-2xl">
          Sing-{location.pathname === "/sign-up" ? "UP" : "In"} Form
        </h1>
        <form onSubmit={handleSubmit} className="form-control">
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered input-sm w-full"
              placeholder="Enter your Email"
              type="email"
              value={email}
              onChange={handleChange}
              id="email"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                className="input input-bordered input-sm w-full"
                placeholder="Enter your Password"
                id="password"
                value={password}
                onChange={handleChange}
                type={!showPassword ? "password" : "text"}
              />
              <FaEye
                onClick={() => setShowPassword((pre) => !pre)}
                className=" cursor-pointer absolute right-1 top-2"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button type="submit" className="btn btn-sm btn-outline">
              Sign-{location.pathname === "/sign-up" ? "UP" : "In"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default SignIn;
