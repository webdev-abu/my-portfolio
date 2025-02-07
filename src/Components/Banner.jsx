import React from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import MyImg from "../assets/images/myProfile.jpg";
import bannerBg from "../assets/images/banner-bg01.jpg";

const Banner = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover "
      style={{
        background: `url(${bannerBg})`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center bg-[rgba(255, 255, 255, 0.55)]">
        {/* Professional Photo */}
        <motion.img
          src={MyImg} // Replace this with your professional photo URL
          alt="Abu Tahir"
          className="w-40 h-40 rounded-full mb-6 border-4 border-blue-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Designation & Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Hi, I'm Abu Tahir
          </h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">
            Full Stack Developer
          </p>
          <p className="text-gray-600 max-w-xl mx-auto">
            My professional field of knowledge is developing modern, responsive
            web apps that support the development of both individuals and
            companies. passionate about writing code and developing useful
            solutions.
          </p>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div className="mt-6" whileHover={{ scale: 1.1 }}>
          <a
            href="/resume.pdf" // Replace with your resume file path
            download
            className="btn btn-primary px-8 py-2 text-white rounded-lg shadow-md"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="mt-8 flex space-x-6">
          <SocialLink
            href="https://github.com/webdev-abu"
            Icon={AiFillGithub}
          />
          <SocialLink
            href="https://www.linkedin.com/in/abu-tahir-031b10259"
            Icon={AiFillLinkedin}
          />

          <SocialLink
            href="https://www.facebook.com/ra.umar.31"
            Icon={AiFillFacebook}
          />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-600 hover:text-blue-600 transition-colors"
    whileHover={{ scale: 1.2 }}
  >
    <Icon />
  </motion.a>
);

export default Banner;
