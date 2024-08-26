import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#2C2F33] text-[#FFC107] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8">
          I'd love to hear from you! Whether it's a project inquiry or just to connect, feel free to reach out.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <a href="mailto:rimfat.timnan.simon@example.com" className="text-3xl hover:text-white transition duration-300">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/rimfat-timnan-simon" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-white transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rimfat-timnan-simon" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-white transition duration-300">
            <FaGithub />
          </a>
        </div>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-[#1A1D23] text-white border border-[#FFC107] focus:outline-none focus:border-white" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-[#1A1D23] text-white border border-[#FFC107] focus:outline-none focus:border-white" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full p-3 rounded bg-[#1A1D23] text-white border border-[#FFC107] focus:outline-none focus:border-white" rows="5"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#FFC107] text-[#1A1D23] p-3 rounded font-semibold hover:bg-white transition duration-300">
            Send Message
            Send Message

          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;