import React from 'react';
// import img from '../assets/images/img3.png'
import img from '../assets/images/frontend.webp';

import { FaReact, FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa'; // Example icons for skills

const About = () => {
  return (
    <section id="about" className="bg-blue-950 text-blue-950 py-12 overflow-hidden ">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900 to-blue-950 opacity-50 "></div>
      <div className="container mx-auto px-4 text-center  z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate_animated animatefadeIn animate_delay-1s text-white">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src={img}
            alt="About Me" 
            className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-lg mb-6 md:mb-0" 
          />
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            {/* <p className="text-lg md:text-xl leading-relaxed mb-4 animate_animated animatefadeIn animate_delay-2s">
              With a keen eye for detail and a love for problem-solving, I craft intuitive and engaging user experiences using HTML, CSS, JavaScript, ReactJS, and Tailwind CSS. I enjoy tackling diverse projects, from e-commerce to education, and everything in between.
            </p> */}
            <p className="text-lg md:text-xl leading-relaxed mb-6 animate_animated animatefadeIn animate_delay-3s">
              Driven by passion and a strategic approach, my unique blend of technical expertise and creative thinking enables me to deliver high-quality solutions that exceed expectations.
               As a mentor at Bluehouse Technologies, I'm dedicated to sharing knowledge and empowering others to grow.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-4xl mb-2" />
                <p className="text-md">HTML5</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-4xl mb-2" />
                <p className="text-md">CSS3</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-4xl mb-2" />
                <p className="text-md">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl mb-2" />
                <p className="text-md">ReactJS</p>
              </div>
            </div>
            <a href="/resume" className="inline-block bg-blue-950 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FFD54F] transition duration-300">
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;