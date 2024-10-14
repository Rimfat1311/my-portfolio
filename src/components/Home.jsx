import React from 'react';
import img from '../assets/images/frontend.webp';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-white text-blue-950 flex flex-col-reverse md:flex-row items-center pt-20 p-10 gap-10">
      <div className="container mx-auto px-4 text-center md:text-left fade-in">
        <h1 className="text-4xl md:text-4xl font-bold mb-6 slide-up">Welcome! I'm Rimfat Timnan Simon</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8 slide-up">
          With a keen eye for detail and a love for problem-solving, I craft intuitive and engaging user experiences using HTML, CSS, JavaScript, ReactJS, and Tailwind CSS. As a versatile developer, I enjoy tackling diverse projects, from e-commerce to education, and everything in between.
        </p>
        
        <a href="#projects" className="fade-in slide-up mt-8 inline-block bg-blue-900 text-white px-6 py-3 rounded-full text-lg font-semibold btn-hover">
          Explore My Work
        </a>
      </div>
      <div>
         <img src={img} alt="profile picture" className='border rounded-full pt-20 mt-48 md:mt-5 bg-blue-950  fade-in' height="900"/>
      </div>
    </section>
  );
};

export default Home;
