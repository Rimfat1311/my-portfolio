// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-blue-950 text-white p-4 fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center px-20">
//         <div className="text-2xl font-bold">Rimfat Timnan Simon</div>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><a href="#home" className="hover:text-white">Home</a></li>
//             <li><a href="#about" className="hover:text-white">About</a></li>
//             <li><a href="#projects" className="hover:text-white">Projects</a></li>
//             <li><a href="#skills" className="hover:text-white">Skills</a></li>
//             <li><a href="#contact" className="hover:text-white">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-950 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-20">
        <div className="text-2xl font-bold">Rimfat Timnan Simon</div>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              Menu
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
