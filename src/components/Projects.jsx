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
      desc: "A responsive dashboard with login, product management and clean UI.",
      tech: ["React", "Mongoose", "Redux"],
    },
    {
      title: "Todos App",
      desc: "A Todos app with real-time API integration.",
      tech: ["React", "API", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-[#0E0D3D] mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto">
            A collection of my best work crafted with passion & precision.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

              <div className="relative z-10">
               
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                
                <p className="text-gray-300 mb-5 leading-relaxed">
                  {project.desc}
                </p>

               
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
