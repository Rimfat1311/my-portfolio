import React from 'react';
import img from '../assets/images/img.png';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-white text-blue-950 flex flex-col-reverse md:flex-row items-center pt-20 p-10 gap-10">
      <div className="container mx-auto px-4 text-center md:text-left fade-in">
        <h1 className="text-4xl md:text-4xl font-bold mb-6 slide-up">Welcome! I'm Rimfat Timnan Simon</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb- slide-up">
        With a keen eye for detail and a passion for problem-solving, I create intuitive and engaging user experiences using HTML, CSS, JavaScript, ReactJS, 
        and Tailwind CSS. As a versatile developer, I thrive on tackling diverse projects—from e-commerce to education—aiming to enhance user satisfaction and drive engagement.
        </p>
        
        <a href="#projects" className="fade-in slide-up mt-8 inline-block bg-blue-950 text-white px-6 py-3 rounded-full text-lg font-semibold btn-hover">
          Explore My Work
        </a>
      </div>
      <div className="flex justify-center md:justify-end mt-20 md:mt-0">
        <img 
          src={img} 
          alt="profile picture" 
          className="border rounded-full bg-blue-950 fade-in" 
          height="900"
        />
      </div>
    </section>
  );
};

export default Home;
