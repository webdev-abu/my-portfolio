import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaHiking,
  FaPaintBrush,
  FaFootballBall,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16" id="about">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-600 font-semibold">Abu Tahir</span>
          , a passionate Full Stack Developer with a love for building modern
          web systems that help people. My programming journey began during my
          university days when I realized how coding can transform ideas into
          reality. I enjoy building responsive, user-friendly applications that
          solve real-world problems. Over time, I’ve worked with technologies
          like{" "}
          <strong>
            React, Firebase, Tailwind CSS, daisyUI, NextJs, NodeJs, ExpressJs,
            MongoDB,
          </strong>
          , and more.
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          When I’m not coding, you can find me exploring the outdoors, painting
          landscapes, or playing football with friends. These hobbies help me
          stay creative, energized, and motivated. I believe that blending
          creativity and problem-solving makes the best software solutions.
        </motion.p>

        {/* Interests Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <InterestCard
            icon={FaLaptopCode}
            title="Coding"
            description="Building modern, responsive web applications is my passion."
          />
          <InterestCard
            icon={FaHiking}
            title="Hiking"
            description="I love being outdoors, exploring new trails, and connecting with nature."
          />
          <InterestCard
            icon={FaPaintBrush}
            title="Painting"
            description="Sketching and painting landscapes helps me stay creative."
          />
          <InterestCard
            icon={FaFootballBall}
            title="Football"
            description="Playing football keeps me fit and teaches teamwork and strategy."
          />
        </div>
      </div>
    </section>
  );
};

const InterestCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="p-6 bg-white rounded-lg shadow-md text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-4xl text-blue-600 mb-4">
      <Icon />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default AboutMe;
