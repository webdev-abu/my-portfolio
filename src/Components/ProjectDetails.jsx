import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import projectImg_01 from "../assets/images/project_01.png";
import projectImg_02 from "../assets/images/project_02.png";
import projectImg_03 from "../assets/images/project_03.png";

const projectDetails = {
  1: {
    name: "E-Tutor Booking",
    image: projectImg_01,
    description:
      "Welcome to E-Tutor Booking. An Online Tutor Booking Platform is a system designed to connect students with qualified tutors for various subjects or skills.",
    techStack:
      "Vite React, Tailwind CSS use, daisyUI , React Router, React Hook, React Component, React sweet alert, Firebase Authentication, JWT Authentication, React swiper, React lottie-react, React framer-motion, React react-router-dom, React Hot Toast, React Fontawasomeicon, The design responsive (Mobile , Tab, Desktop).",
    liveLink: "https://tutor-booking-43ee8.web.app",
    githubClientLink: "https://github.com/webdev-abu/E-Tutor-Booking",
    githubServerLink: "https://github.com/webdev-abu/E-Tutor-Booking-server",
    challenges:
      "Handling real-time data updates and implementing advanced filtering options.",
    improvements:
      "Add payment gateway integration and implement real-time stock tracking.",
  },
  2: {
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
    challenges:
      "Creating an efficient scheduling system and managing tutor availability in real time.",
    improvements:
      "Introduce video calling integration and student review system.",
  },
  3: {
    name: "career counseling",
    image: projectImg_03,
    description:
      "Welcome to **career counseling**. website that provides services to users seeking career guidance. For this project, will develop a Career Counseling Website designed to guide users on their career paths.",
    techStack:
      "Vite React, Tailwind CSS use, daisyUI Library, React Router, React Hook, React Component, React sweet alert, Firebase Authentication, React Hot Toast, React Fontawasomeicon, The design responsive (Mobile , Tab, Desktop), express, mongodb, node",
    liveLink: "https://b10-a9-career-counseling.web.app",
    githubClientLink: "https://github.com/webdev-abu/career-counseling",
    challenges: "Design consistency across different screen sizes.",
    improvements: "Add a blog section and dark mode.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <p className="text-center text-gray-600">Project not found.</p>;
  }

  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.name}
        </motion.h2>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto object-cover rounded-md mb-4"
        />
        <p className="text-lg text-gray-700 mb-4">
          <strong>Technology Stack:</strong> {project.techStack}
        </p>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="text-gray-700 mb-4">
          <strong>Challenges Faced:</strong> {project.challenges}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Potential Improvements:</strong> {project.improvements}
        </p>
        <div className="flex space-x-4 mt-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Live Project
          </a>
          <a
            href={project.githubClientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub Client Repository
          </a>
          {project.githubServerLink && (
            <a
              href={project.githubServerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub Server Repository
            </a>
          )}
        </div>
      </div>
      <div className=" flex justify-center items-center mt-32">
        <Link to={`/#projects`}>
          <button className="btn btn-primary w-full">Back To Project</button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
