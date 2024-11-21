"use client"; // This line marks the component as a Client Component

import React, { useState } from "react";
import Navbar from '../../components/Header'; // Adjust the import path if necessary
import Footer from '../../components/Footer'; // Import Footer component

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar included at the top of the page */}
      <Navbar />
      
      <section className="contact-form p-8 bg-white shadow-lg rounded-lg max-w-lg w-full mx-auto mt-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grayv-600"
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600">
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Footer added here */}
      <Footer />
    </div>
  );
};

export default Contact;



