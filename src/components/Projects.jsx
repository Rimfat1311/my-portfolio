import React from 'react';


const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. This project involves creating a responsive news-blog website using React and Tailwind CSS.',
    imageUrl: 'https://res.cloudinary.com/dderwjbjk/image/upload/v1742722380/Screenshot_2024-11-08_090750_v7zznw.png',
    liveUrl: 'https://news-homepage-rimfat.vercel.app',
    repoUrl: 'https://github.com/Rimfat1311/news-homepage',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
  },


  {
    title: 'Project Two',
    description: 'A brief description of Project One. This project involves creating a responsive news-blog website using React and Tailwind CSS.',
    imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/pegqgyz9hsj11urrxpfj.jpg',
    liveUrl: 'https://news-homepage-rimfat.vercel.app',
    repoUrl: 'https://github.com/Rimfat1311/news-homepage',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
  },

  {
    title: 'Project Three',
    description: 'A brief description of Project Two. This project is a task management app built with React and integrated with a REST API.',
    imageUrl: 'https://res.cloudinary.com/dderwjbjk/image/upload/v1742722642/project1_mlfxgg.png',
    liveUrl: 'https://live-demo-two.com',
    repoUrl: 'https://github.com/yourusername/project-two',
    technologies: ['React', 'API Integration', 'JavaScript'],
  },
  {
    title: 'Project Four',
    description: 'A brief description of Project Two. This project is a task management app built with React and integrated with a REST API.',
    imageUrl: 'https://res.cloudinary.com/dderwjbjk/image/upload/v1742723304/Screenshot_2024-10-17_025719_trcbvt.png',
    liveUrl: 'https://todo-list-app-delta-five.vercel.app/',
    repoUrl: 'https://github.com/yourusername/project-two',
    technologies: ['React', 'Tailwind css'],
  },
  // Add more projects as needed with react routing to avoid to much of buziness on my portfolio
];

const Projects = () => {
  return (
    <section id="projects" className="bg-blue-950 text-blue-950 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-md mb-4">{project.description}</p>
              <p className="text-sm mb-4">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline mr-4 bg-blue-950 rounded-full px-4 py-3">
                Live Demo
              </a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline bg-blue-950 rounded-full px-4 py-3 ">
                GitHub Repo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;