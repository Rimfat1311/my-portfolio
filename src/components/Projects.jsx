import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. This project involves creating a responsive e-commerce website using React and Tailwind CSS.',
    imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/pegqgyz9hsj11urrxpfj.jpg',
    liveUrl: 'https://live-demo-one.com',
    repoUrl: 'https://github.com/yourusername/project-one',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This project is a task management app built with React and integrated with a REST API.',
    imageUrl: 'path_to_image_two.jpg',
    liveUrl: 'https://live-demo-two.com',
    repoUrl: 'https://github.com/yourusername/project-two',
    technologies: ['React', 'API Integration', 'JavaScript'],
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Two. This project is a task management app built with React and integrated with a REST API.',
    imageUrl: 'path_to_image_three.jpg',
    liveUrl: 'https://live-demo-three.com',
    repoUrl: 'https://github.com/yourusername/project-three',
    technologies: ['React', 'API Integration', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This project is a task management app built with React and integrated with a REST API.',
    imageUrl: 'path_to_image_two.jpg',
    liveUrl: 'https://live-demo-two.com',
    repoUrl: 'https://github.com/yourusername/project-two',
    technologies: ['React', 'API Integration', 'JavaScript'],
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
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline mr-4 bg-blue-900 rounded-full p-2">
                Live Demo
              </a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline bg-blue-900 rounded-full p-2 ">
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