import React from 'react';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1D23] text-[#FFC107] py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#home" className="hover:text-white transition duration-300">Home</a>
          <a href="#projects" className="hover:text-white transition duration-300">Projects</a>
          <a href="#skills" className="hover:text-white transition duration-300">Skills</a>
          <a href="#contact" className="hover:text-white transition duration-300">Contact</a>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a href="https://www.linkedin.com/in/rimfat-timnan-simon" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rimfat-timnan-simon" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-white transition duration-300">
            <FaGithub />
          </a>
        </div>
        <button onClick={scrollToTop} className="text-2xl hover:text-white transition duration-300">
          <FaArrowUp />
        </button>
        <p className="mt-4">&copy; {new Date().getFullYear()} Rimfat Timnan Simon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;