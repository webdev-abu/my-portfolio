import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiDaisyui,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
// import { SiDaisyui } from "react-icons/si";

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        {/* Skill Categories */}
        <div className="space-y-16">
          {/* Frontend Skills */}
          <SkillCategory title="Frontend">
            <SkillCard skill="React" level="95%" Icon={FaReact} />
            <SkillCard skill="Tailwind CSS" level="85%" Icon={SiTailwindcss} />
            <SkillCard skill="DaisyUI" level="95%" Icon={SiDaisyui} />
            <SkillCard
              skill="Firebase (Frontend)"
              level="80%"
              Icon={SiFirebase}
            />
          </SkillCategory>

          {/* Backend Skills */}
          <SkillCategory title="Backend">
            <SkillCard skill="Node.js" level="75%" Icon={FaNodeJs} />
            <SkillCard skill="Express.js" level="75%" Icon={SiExpress} />
            <SkillCard skill="MongoDB" level="85%" Icon={SiMongodb} />
            <SkillCard
              skill="Firebase (Backend)"
              level="80%"
              Icon={SiFirebase}
            />
          </SkillCategory>

          {/* Tools & Others */}
          <SkillCategory title="Tools & Others">
            <SkillCard
              skill="Git & Version Control"
              level="85%"
              Icon={FaGitAlt}
            />
            <SkillCard
              skill="Figma (UI/UX Design)"
              level="75%"
              Icon={FaFigma}
            />
          </SkillCategory>
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, children }) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold text-gray-700 mb-6">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  </motion.div>
);

const SkillCard = ({ skill, level, Icon }) => (
  <motion.div
    className="p-6 bg-white rounded-lg shadow-md text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-4xl text-blue-600 mb-4">
      <Icon />
    </div>
    <h4 className="text-xl font-bold text-gray-800 mb-2">{skill}</h4>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-500 h-4 rounded-full"
        style={{ width: level }}
      ></div>
    </div>
    <p className="text-gray-600 mt-2">{level} Proficiency</p>
  </motion.div>
);

export default Skills;
