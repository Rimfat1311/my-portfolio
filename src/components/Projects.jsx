import React from 'react';


const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. This project involves creating a responsive news-blog website using React and Tailwind CSS.',
    imageUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/pegqgyz9hsj11urrxpfj.jpg',
    liveUrl: 'https://news-homepage-rimfat.vercel.app',
    repoUrl: 'https://github.com/Rimfat1311/news-homepage',
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
    imageUrl: 'data:image/jpeg;base64,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',
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