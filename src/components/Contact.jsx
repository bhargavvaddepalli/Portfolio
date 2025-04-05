import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div 
    id = "contact"
    className="min-h-screen flex flex-col justify-center items-center  px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Me</h2>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-xl" />
            <span className="text-gray-700">+91 7032795392</span>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-xl" />
            <span className="text-gray-700">bhargavraghava1@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600 text-xl" />
            <span className="text-gray-700">Mylavaram, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-900">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/bhargavvaddepalli" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/bhargav-raghava" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 text-2xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
