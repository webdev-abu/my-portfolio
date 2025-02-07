import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const QualificationExperience = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16" id="qualification">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Educational Qualification & Experience
        </motion.h2>

        {/* Educational Background */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-700 mb-6">
            <FaGraduationCap className="inline-block text-blue-600 mr-2" />
            Educational Background
          </h3>
          <div className="space-y-8">
            <TimelineCard
              title="Bachelor of Science in Computer Science"
              institution="University of North BengalUniversity"
              year="2009 - 2012"
              description="Focused on web development, data structures, and algorithms. Completed various projects in React, Node.js, and Firebase."
            />
            <TimelineCard
              title="Higher Secondary Certificate (HSC)"
              institution="West Bengal Council of Higher Secondary Education"
              year="2007 - 2009"
              description="Studied Science with a focus on mathematics, physics, and computer science."
            />
          </div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-700 mb-6">
            <FaBriefcase className="inline-block text-blue-600 mr-2" />
            Professional Experience
          </h3>
          <div className="space-y-8">
            <TimelineCard
              title="Frontend Developer"
              institution="Fresher"
              year="2022 - Present"
              description="Developed responsive web applications using React, Tailwind CSS, and Firebase.NextJs,NodeJs,ExpressJs,MongoDB, Collaborated with cross-functional teams to deliver high-quality solutions."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineCard = ({ title, institution, year, description }) => (
  <motion.div
    className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <h4 className="text-xl font-bold text-gray-800 mb-1">{title}</h4>
    <p className="text-blue-600 font-medium">{institution}</p>
    <p className="text-gray-500">{year}</p>
    <p className="text-gray-600 mt-2">{description}</p>
  </motion.div>
);

export default QualificationExperience;
