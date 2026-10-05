import React from "react";

const Skills = () => {
  const skills = [
    { name: "React JS", level: "90%" },
    { name: "Tailwind CSS", level: "85%" },
    { name: "JavaScript (ES6+)", level: "88%" },
    { name: "HTML / CSS", level: "95%" },
    { name: "Git & GitHub", level: "80%" },
    { name: "Responsive Design", level: "92%" },
    { name: "Mongoose", level: "85%" },
    { name: "Node Js / Express Js", level: "80%" },
    { name: "Redux", level: "80%" },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28 border-t border-[#E3E3F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-[#5B5BD6]" />

              <h4 className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#5B5BD6]">
                Skills & Expertise
              </h4>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[0.01em] text-[#171717]">
              My technical
              <br />
              <span className="text-[#5B5BD6]">skill set.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 tracking-[0.005em] text-[#62626E]">
            A frontend-focused skill set built through professional experience,
            real-world projects and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className="group relative bg-[#F7F7FC] border border-[#E3E3F2] rounded-2xl p-7 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:border-[#CFCFF0] hover:shadow-[0_20px_50px_rgba(70,70,150,0.08)]"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#DDDDF2] text-xs font-semibold tracking-[0.03em] text-[#5B5BD6] group-hover:bg-[#5B5BD6] group-hover:text-white group-hover:border-[#5B5BD6] transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg md:text-xl tracking-[0.005em] text-[#171717] group-hover:text-[#5B5BD6] transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-sm font-semibold tracking-[0.02em] text-[#5B5BD6]">
                  {skill.level}
                </span>
              </div>

              <div className="w-full h-2 bg-white border border-[#E3E3F2] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#5B5BD6] transition-all duration-700 group-hover:bg-[#4B4BB8]"
                  style={{ width: skill.level }}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#858594]">
                  Proficiency
                </span>

                <span className="text-[10px] uppercase tracking-[0.16em] text-[#858594]">
                  {index < 6 ? "Advanced" : "Working Knowledge"}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#5B5BD6] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E3E3F2]">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#858594]">
              Primary Focus
            </span>

            <span className="hidden md:block text-[#D5D5E8]">/</span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[#171717] font-medium tracking-[0.005em]">
              <span>React.js</span>
              <span className="text-[#CFCFE2]">·</span>
              <span>JavaScript</span>
              <span className="text-[#CFCFE2]">·</span>
              <span>Responsive UI</span>
              <span className="text-[#CFCFE2]">·</span>
              <span>Tailwind CSS</span>
              <span className="text-[#CFCFE2]">·</span>
              <span>Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
