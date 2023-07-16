import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{
        x: "-100%",
      }}
      animate={{
        x: 0,
      }}
    >
      <div className="hero max-w-3xl mx-auto mt-14 rounded-lg bg-base-200 border-2 border-black">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold">Notification Application</h1>
            <p className="py-6 text-justify">
              This is a simple fullstack notification app, which works with
              Microsoft Graph Api to get data about the current events. The UI
              of this app is made by React and the backend is by Express JS as
              well as MongoDB for DataBase. This app is fully made by Moein
              Samani. For more information about me visit my Github account{" "}
            </p>
            <button className="btn btn-primary btn-sm">
              <Link to={"https://github.com/moeinDeveloper92"} target="_blank">
                Visit My Github
              </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
