import React from "react";

const Projects = () => {
  const projectList = [
    {
      number: "01",
      title: "Portfolio Website",
      type: "Frontend Development",
      desc: "A modern personal portfolio built using React.js and Tailwind CSS with responsive layouts, reusable components and clean UI interactions.",
      tech: ["React", "Tailwind CSS", "Vite"],
    },
    {
      number: "02",
      title: "E-Commerce Dashboard",
      type: "Web Application",
      desc: "A responsive dashboard with authentication, product management and structured interfaces designed for a smooth admin experience.",
      tech: ["React", "Redux", "MongoDB"],
    },
    {
      number: "03",
      title: "Todos App",
      type: "API Integration",
      desc: "A responsive task management application with API integration, dynamic data handling and a simple user-friendly interface.",
      tech: ["React", "REST API", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#F7F7FC] pt-32 pb-24 md:pb-32 border-t border-[#E3E3F2]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-[#5B5BD6]" />

              <h4 className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#5B5BD6]">
                Selected Work
              </h4>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[0.01em] text-[#171717]">
              Projects I've
              <br />
              <span className="text-[#5B5BD6]">worked on.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 tracking-[0.005em] text-[#62626E]">
            A collection of frontend applications and web experiences built
            with a focus on clean interfaces, responsive layouts and practical
            user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectList.map((project) => (
            <article
              key={project.number}
              className="group relative flex flex-col min-h-[430px] p-7 md:p-8 bg-white border border-[#E3E3F2] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#CFCFF0] hover:shadow-[0_20px_50px_rgba(70,70,150,0.08)]"
            >
              <div className="absolute -top-14 -right-14 w-32 h-32 rounded-full border border-[#5B5BD6]/10 transition-transform duration-700 group-hover:scale-125" />

              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[#F1F1FC] rounded-bl-[80px] transition-all duration-500 group-hover:bg-[#E8E8FA]" />

                <span className="absolute top-5 right-6 text-sm font-semibold tracking-[0.05em] text-[#5B5BD6]">
                  {project.number}
                </span>
              </div>

              <div className="relative z-10 mb-14">
                <span className="inline-flex px-3 py-1.5 rounded-full bg-[#F7F7FC] border border-[#E3E3F2] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#62627A] group-hover:bg-[#F1F1FC] group-hover:border-[#DDDDF2] group-hover:text-[#5B5BD6] transition-all duration-300">
                  {project.type}
                </span>
              </div>

              <h3 className="relative z-10 text-3xl md:text-[34px] tracking-[0.01em] text-[#171717] group-hover:text-[#5B5BD6] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="relative z-10 mt-5 text-sm md:text-base leading-7 tracking-[0.005em] text-[#62626E]">
                {project.desc}
              </p>

              <div className="relative z-10 flex flex-wrap gap-2 mt-7">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full bg-white border border-[#E3E3F2] text-xs font-medium tracking-[0.01em] text-[#62627A] group-hover:border-[#D5D5EE] transition-colors duration-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-auto pt-10">
                <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-[#171717] group-hover:text-[#5B5BD6] transition-colors duration-300">
                  View Project

                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#171717] text-white text-sm transition-all duration-300 group-hover:bg-[#5B5BD6] group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#5B5BD6] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-[#E3E3F2] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm tracking-[0.005em] text-[#5B5BD6]">
            React applications · UI development · Responsive experiences
          </p>

          <p className="text-sm font-medium tracking-[0.005em] text-[#171717]">
            Frontend focused
            <span className="mx-2 text-[#CFCFE2]">·</span>
            Performance driven
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
