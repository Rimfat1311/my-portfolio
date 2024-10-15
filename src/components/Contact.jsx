import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-950 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8">
          I'd love to hear from you! Whether it's a project inquiry or just to connect, feel free to reach out.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <a href="mailto:rimfat.timnan.simon@example.com" className="text-3xl hover:text-white transition duration-300">
            <FaEnvelope />
          </a>
          <a href='https://www.linkedin.com/in/rimfat-timnan-088a022bb/' target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-white transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rimfat-timnan-simon" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-white transition duration-300">
            <FaGithub />
          </a>
        </div>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white text-blue-950 border-[#FFC107] focus:outline-none focus:border-white" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-white text-blue-950 border border-[#FFC107] focus:outline-none focus:border-white" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" className="w-full p-3 rounded bg-white text-blue-950 border border-[#FFC107] focus:outline-none focus:border-white" rows="5"></textarea>
          </div>
          <button type="submit" className="w-full bg-white text-[#1A1D23] p-3 rounded font-semibold hover:bg-blue-950 hover:text-white transition duration-300">
            Send Message

          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;