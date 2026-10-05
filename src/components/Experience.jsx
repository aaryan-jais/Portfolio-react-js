import React, { useState } from "react";

const experienceData = [
  {
    role: "Senior Web Developer",
    company: "Simplia Inc. USA",
    duration: "Aug 2022 – Sep 2025",
    description:
      "Designed and developed responsive websites and web interfaces for international clients, focusing on usability, performance and consistent visual systems.",
    points: [
      "Designed and developed 100+ responsive UI screens across desktop, tablet and mobile.",
      "Improved website performance from around 70 to 95+ using Lighthouse and PageSpeed optimization.",
      "Built reusable UI components and maintained consistent design systems across projects.",
      "Worked closely with developers, designers and clients to translate requirements into production-ready interfaces.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "UI Design"],
  },
  {
    role: "Sr. Web Designer",
    company: "Web Smile India",
    duration: "Jan 2022 – Aug 2022",
    description:
      "Created responsive websites and landing pages while working on UI design, WordPress development and frontend implementation.",
    points: [
      "Developed responsive websites using HTML, CSS, JavaScript and WordPress.",
      "Created landing pages and reusable page sections based on design requirements.",
      "Worked on cross-browser compatibility and responsive layouts.",
      "Implemented SEO-friendly structure and performance improvements.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "SEO"],
  },
  {
    role: "Web Designer",
    company: "Netking Web Services Pvt. Ltd.",
    duration: "Dec 2019 – Jan 2022",
    description:
      "Worked on website design and frontend development for multiple client projects with a strong focus on responsive UI.",
    points: [
      "Designed and developed responsive websites for different business requirements.",
      "Converted design concepts into functional web interfaces.",
      "Worked extensively with HTML, CSS, Bootstrap, JavaScript and jQuery.",
      "Maintained existing websites and implemented UI improvements.",
    ],
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleExperience = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 md:py-28 border-t border-[#E3E3F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.3fr_0.7fr] gap-12 lg:gap-16">
          <div className="lg:pr-6">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-[2px] bg-[#5B5BD6]" />

              <h4 className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#5B5BD6]">
                Experience
              </h4>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[0.95] tracking-[-0.02em] text-[#171717]">
              My journey{" "}
              <span className="text-[#5B5BD6]">
                in web development.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm md:text-base leading-7 text-[#62626E]">
              Experience across web design, frontend development, WordPress
              and performance-focused digital experiences for businesses and
              international clients.
            </p>
          </div>

          <div className="border-t border-[#E3E3F2]">
            {experienceData.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={item.company}
                  className="border-b border-[#E3E3F2]"
                >
                  <button
                    type="button"
                    onClick={() => toggleExperience(index)}
                    className="w-full text-left py-6 md:py-7 group"
                  >
                    <div className="grid grid-cols-[50px_1fr_auto] md:grid-cols-[65px_1fr_auto] items-center gap-4 md:gap-7">
                      <span
                        className={`flex items-center justify-center w-10 h-10 rounded-full text-xs md:text-sm font-semibold tracking-[0.08em] border transition-all duration-300 ${
                          isOpen
                            ? "bg-[#5B5BD6] border-[#5B5BD6] text-white shadow-[0_7px_20px_rgba(91,91,214,0.25)]"
                            : "bg-[#F1F1FC] border-[#DDDDF2] text-[#5B5BD6] group-hover:bg-[#5B5BD6] group-hover:border-[#5B5BD6] group-hover:text-white"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <div>
                        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                          <h3
                            className={`text-xl md:text-2xl lg:text-[27px] tracking-[-0.01em] transition-colors duration-300 ${
                              isOpen
                                ? "text-[#4B4BB8]"
                                : "text-[#171717] group-hover:text-[#5B5BD6]"
                            }`}
                          >
                            {item.role}
                          </h3>

                          <span className="hidden md:block w-1 h-1 rounded-full bg-[#C5C5DD]" />

                          <p className="mt-1 md:mt-0 text-sm md:text-base text-[#686875]">
                            {item.company}
                          </p>
                        </div>

                        <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[#858594]">
                          {item.duration}
                        </p>
                      </div>

                      <span
                        className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "bg-[#5B5BD6] border-[#5B5BD6] text-white rotate-45 shadow-[0_7px_20px_rgba(91,91,214,0.20)]"
                            : "bg-white border-[#D9D9EA] text-[#5B5BD6] group-hover:border-[#5B5BD6] group-hover:bg-[#F7F7FD]"
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-7 md:pb-8 pl-0 md:pl-[92px]">
                        <div className="bg-[#F7F7FC] border border-[#E1E1F0] rounded-xl p-5 md:p-7">
                          <p className="max-w-3xl text-sm md:text-base leading-7 text-[#62626E]">
                            {item.description}
                          </p>

                          <div className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-3">
                            {item.points.map((point, pointIndex) => (
                              <div
                                key={pointIndex}
                                className="flex gap-3 text-sm leading-6 text-[#62626E]"
                              >
                                <span className="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[#5B5BD6]" />

                                <span>{point}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[#E1E1F0]">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1.5 rounded-full bg-white border border-[#DCDCED] text-xs font-medium text-[#62627A]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
