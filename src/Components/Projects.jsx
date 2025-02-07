import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectImg_01 from "../assets/images/project_01.png";
import projectImg_02 from "../assets/images/project_02.png";
import projectImg_03 from "../assets/images/project_03.png";

const projects = [
  {
    id: 1,
    name: "E-Tutor Booking",
    image: projectImg_01,
    description:
      "Welcome to E-Tutor Booking. An Online Tutor Booking Platform is a system designed to connect students with qualified tutors for various subjects or skills.",
    techStack:
      "Vite React, Tailwind CSS use, daisyUI , React Router, React Hook, React Component, React sweet alert, Firebase Authentication, JWT Authentication, React swiper, React lottie-react, React framer-motion, React react-router-dom, React Hot Toast, React Fontawasomeicon, The design responsive (Mobile , Tab, Desktop).",
    liveLink: "https://tutor-booking-43ee8.web.app",
    githubClientLink: "https://github.com/webdev-abu/E-Tutor-Booking",
    githubServerLink: "https://github.com/webdev-abu/E-Tutor-Booking-server",
  },
  {
    id: 2,
    name: "Sports Equipment Store",
    image: projectImg_02,
    description:
      "Welcome to Sports Equipment Store. The Sports Equipment Store is a web-based project aimed at providing customers with a platform to browse, select, and purchase sports equipment conveniently.",
    techStack:
      "Vite React, Tailwind CSS use, daisyUI Library, React Router, React Hook, React Component, React sweet alert, Firebase Authentication, React Hot Toast, React Fontawasomeicon, The design responsive (Mobile , Tab, Desktop), express, mongodb, node",
    liveLink: "https://b10-a10-sport-store.web.app",
    githubClientLink: "https://github.com/webdev-abu/Sports-Equipment-Store",
    githubServerLink:
      "https://github.com/webdev-abu/Sports-Equipment-Store-server",
  },
  {
    id: 3,
    name: "career counseling",
    image: projectImg_03,
    description:
      "Welcome to **career counseling**. website that provides services to users seeking career guidance. For this project, will develop a Career Counseling Website designed to guide users on their career paths.",
    techStack:
      "Vite React, Tailwind CSS use, daisyUI Library, React Router, React Hook, React Component, React sweet alert, Firebase Authentication, React Hot Toast, React Fontawasomeicon, The design responsive (Mobile , Tab, Desktop), express, mongodb, node",
    liveLink: "https://b10-a9-career-counseling.web.app",
    githubClientLink: "https://github.com/webdev-abu/career-counseling",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link to={`/projects/${project.id}`}>
                <button className="btn btn-primary w-full">
                  View More / Details
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
