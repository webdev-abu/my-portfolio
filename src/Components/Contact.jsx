import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-16"
      id="contact"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <ContactInfo
                icon={<FaEnvelope className="text-blue-600 text-2xl" />}
                label="Email"
                value="abutahir90@gmail.com"
                link="mailto:abutahir90@gmail.com"
              />
              <ContactInfo
                icon={<FaPhoneAlt className="text-green-600 text-2xl" />}
                label="Phone"
                value="+91 959-380-9382"
                link="tel:+91 9593809382"
              />
              <ContactInfo
                icon={<FaWhatsapp className="text-green-500 text-2xl" />}
                label="WhatsApp"
                value="+91 959-380-9382"
                link="https://wa.me/9593809382"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="form-control">
                <label className="label font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value, link }) => (
  <motion.div
    className="flex items-center space-x-4"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-4 bg-gray-100 rounded-full">{icon}</div>
    <div>
      <p className="text-gray-600 text-sm">{label}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-blue-600 hover:underline"
      >
        {value}
      </a>
    </div>
  </motion.div>
);

export default Contact;
