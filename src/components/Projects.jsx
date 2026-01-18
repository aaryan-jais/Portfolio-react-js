import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio built using React JS and Tailwind CSS with smooth UI components.",
      tech: ["React", "Tailwind", "Vite"],
    },
    {
      title: "E-Commerce Dashboard",
      desc: "A responsive dashboard with charts, product management and clean UI.",
      tech: ["React", "Chart.js", "Redux"],
    },
    {
      title: "Weather App",
      desc: "A weather forecasting app with real-time API integration.",
      tech: ["React", "API", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">
            My Projects
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            A collection of my best work crafted with passion & precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group bg-[#0E0C21]  p-6 rounded-2xl shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-600 transition">
                {project.title}
              </h3>

            
              <p className="text-white mb-5 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

            
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
