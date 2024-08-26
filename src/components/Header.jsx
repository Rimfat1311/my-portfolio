import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#1A1D23] text-[#FFC107] p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Rimfat Timnan Simon</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;