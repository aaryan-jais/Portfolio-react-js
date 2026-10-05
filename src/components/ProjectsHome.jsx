import React from "react";
import { Link } from "react-router";

const projects = [
  {
    number: "01",
    title: "Enterprise Flow",
    type: "Business Management",
    description:
      "A business management application with authentication, workflows, dashboards and responsive interfaces.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "MongoDB"],
    link: "https://enterprise-flow.onrender.com/",
  },
  {
    number: "02",
    title: "SupportHub",
    type: "Customer Support",
    description:
      "A support platform for managing tickets, customers, agents and knowledge-base content through a structured dashboard.",
    tech: ["React.js", "Context API", "React Router", "JavaScript"],
    link: "https://supporthub-n6k5.onrender.com/",
  },
  {
    number: "03",
    title: "ChatFlow",
    type: "Messaging Interface",
    description:
      "A modern messaging interface with conversations, message actions, reactions, editing and responsive UI.",
    tech: ["React.js", "Context API", "Custom Hooks", "JavaScript"],
    link: "https://chatflow-39qk.onrender.com/",
  },
];

function ProjectsHome() {
  return (
    <section className="relative bg-white py-20 pt-40 md:py-28 md:pt-48 border-t border-[#E3E3F2] overflow-hidden">
      <div className="absolute top-20 right-[-120px] w-72 h-72 rounded-full bg-[#5B5BD6]/[0.035] blur-3xl pointer-events-none" />

      <div className="absolute bottom-20 left-[-140px] w-80 h-80 rounded-full bg-[#5B5BD6]/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-[#5B5BD6]" />

              <h4 className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#5B5BD6]">
                Selected Work
              </h4>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[0.01em] text-[#171717]">
              Things I've{" "}
              <span className="text-[#5B5BD6]">built.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 tracking-[0.005em] text-[#62626E]">
            A selection of applications I've designed and developed,
            combining frontend engineering with practical UI thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative flex flex-col min-h-[430px] p-7 md:p-8 bg-[#F7F7FC] border border-[#E3E3F2] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:border-[#CFCFF0] hover:shadow-[0_24px_60px_rgba(70,70,150,0.09)]"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full border border-[#5B5BD6]/10 transition-transform duration-700 group-hover:scale-125" />

              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[#F1F1FC] rounded-bl-[80px] transition-all duration-500 group-hover:bg-[#E8E8FA]" />

                <span className="absolute top-5 right-6 text-sm font-semibold tracking-[0.05em] text-[#5B5BD6]">
                  {project.number}
                </span>
              </div>

              <div className="relative z-10 mb-14">
                <span className="inline-flex px-3 py-1.5 rounded-full bg-white border border-[#E3E3F2] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#62627A] group-hover:bg-[#F1F1FC] group-hover:border-[#DDDDF2] group-hover:text-[#5B5BD6] transition-all duration-300">
                  {project.type}
                </span>
              </div>

              <h3 className="relative z-10 text-3xl md:text-[34px] tracking-[0.01em] text-[#171717] group-hover:text-[#5B5BD6] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="relative z-10 mt-5 text-sm md:text-base leading-7 tracking-[0.005em] text-[#62626E]">
                {project.description}
              </p>

              <div className="relative z-10 flex flex-wrap gap-2 mt-7">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full bg-white border border-[#E3E3F2] text-xs font-medium tracking-[0.01em] text-[#62627A] group-hover:border-[#D5D5EE] transition-colors"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-auto pt-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-[#171717] hover:text-[#5B5BD6] transition-colors duration-300"
                >
                  View Project

                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#171717] text-white text-sm transition-all duration-300 group-hover:bg-[#5B5BD6] group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#5B5BD6] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-sm tracking-[0.005em] text-[#858594]">
            React applications · UI development · Responsive experiences
          </p>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-[#171717] hover:text-[#5B5BD6] transition-colors"
          >
            View all projects

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHome;

