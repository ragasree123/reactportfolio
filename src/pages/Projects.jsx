import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: "E-commerce Website",
      description: "A responsive e-commerce website with product listing and cart features.",
      tech: "React, Tailwind, JavaScript",
      link: "#"
    },
    {
      name: "Portfolio Website",
      description: "This portfolio showcasing my skills and projects.",
      tech: "React, Tailwind",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-10 bg-blue-50">
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <p className="text-sm mb-4"><b>Tech:</b> {project.tech}</p>
            <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
