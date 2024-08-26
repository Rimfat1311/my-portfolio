import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#2C2F33] text-[#FFC107] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome! I'm Rimfat Timnan Simon</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-8">
          With a keen eye for detail and a love for problem-solving, I craft intuitive and engaging user experiences using HTML, CSS, JavaScript, ReactJS, and Tailwind CSS. As a versatile developer, I enjoy tackling diverse projects, from e-commerce to education, and everything in between.
        </p>
        {/* <p className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Driven by passion and a strategic approach, my unique blend of technical expertise and creative thinking enables me to deliver high-quality solutions that exceed expectations. As a mentor at Bluehouse Technologies, I'm dedicated to sharing knowledge and empowering others to grow.
        </p> */}
        <a href="#projects" className="mt-8 inline-block bg-[#FFC107] text-[#1A1D23] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FFC107] hover:text-[#2C2F33] transition duration-300">
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default Home;