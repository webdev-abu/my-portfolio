import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSad } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Error Icon */}
        <div className="text-blue-600 text-8xl mb-4">
          <BiSad />
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/"
            className="btn btn-primary px-6 py-2 text-white rounded-lg shadow-md"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
