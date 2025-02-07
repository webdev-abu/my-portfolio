import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-blue-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">WebDev-Abu</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#skills">My Skills</NavLink>
          <NavLink to="#projects">Projects</NavLink>
          <NavLink to="#contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-blue-600">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white`}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="#about" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="#skills" onClick={toggleMenu}>
            My Skills
          </NavLink>
          <NavLink to="#projects" onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink to="#contact" onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <motion.a
    href={to}
    className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300"
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
  >
    {children}
  </motion.a>
);

export default Navbar;
