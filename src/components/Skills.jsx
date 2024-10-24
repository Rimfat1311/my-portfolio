import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from 'react-icons/fa';
import { FaDiagramNext } from 'react-icons/fa6';
import { FcNext } from 'react-icons/fc';
import { SiNextdotjs } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <FaCss3Alt /> },
      { name: 'Next', icon: <SiNextdotjs /> },
    ],
  },
  {
    category: 'Tools & Software',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGitAlt /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-blue-950 text-blue-950 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{skillCategory.category}</h3>
              <ul className="grid grid-cols-2 gap-4">
                {skillCategory.items.map((skill, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-lg">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;