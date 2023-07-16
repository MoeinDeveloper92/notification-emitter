import React from "react";
import { FaAlipay } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar({ title }) {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-gray-200">
        <div className="flex-none space-x-3">
          <FaAlipay className="text-4xl" />
          <span className="text-2xl font-bold">{title}</span>
        </div>
        <div className="p-4 flex-1 flex justify-end space-x-3">
          <Link to={"/sign-in"} className="btn btn-outline btn-sm">
            {" "}
            Sign-in
          </Link>
          <Link to={"/sign-up"} className="btn btn-outline btn-sm">
            Sign-up
          </Link>
          <Link to={"/about"} className="btn btn-outline btn-sm">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Notification App",
};
export default Navbar;
