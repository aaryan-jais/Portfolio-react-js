import React from "react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces with modern frontend technologies.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React.js",
      "Redux Toolkit",
      "Context API",
      "REST APIs",
    ],
  },
  {
    number: "02",
    title: "UI & Styling",
    description:
      "Creating clean, responsive and consistent interfaces across different screen sizes.",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "UI/UX",
      "Design Systems",
      "Figma",
      "jQuery",
    ],
  },
  {
    number: "03",
    title: "Backend & APIs",
    description:
      "Working knowledge of backend technologies for building and integrating web applications.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Authentication",
      "MySQL",
    ],
  },
  {
    number: "04",
    title: "CMS & Web",
    description:
      "Extensive experience building, optimizing and maintaining production websites.",
    skills: [
      "WordPress",
      "Elementor",
      "WPBakery",
      "SEO",
      "Google Analytics",
      "Search Console",
      "Performance",
    ],
  },
];

const strengths = [
  "Pixel-focused UI implementation",
  "Responsive and mobile-first interfaces",
  "Clean and reusable React components",
  "Performance-conscious development",
];

const primaryFocus = [
  "React.js",
  "JavaScript",
  "Responsive UI",
  "Performance",
  "User Experience",
];

const KeySkills = () => {
  return (
    <section className="bg-[#F7F9F5] py-20 md:py-28 border-t border-[#E1E6DE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.3fr_0.7fr] gap-12 lg:gap-16">
          <div className="lg:pr-6">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-[2px] bg-[#5B5BD6]" />

              <h4 className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#5B5BD6]">
                Skills & Technologies
              </h4>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[0.95] tracking-[-0.02em] text-[#171717]">
              Tools I use to{" "}
              <span className="text-[#5B5BD6]">build the web.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm md:text-base leading-7 text-[#6F746B]">
              A frontend-focused skill set built through professional
              experience in UI development, responsive design, WordPress,
              performance optimization and modern web technologies.
            </p>

            <div className="mt-10 pt-7 border-t border-[#DDE4D9]">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-[#899083]">
                What I Bring
              </p>

              <div className="mt-5 space-y-3.5">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[#5B5BD6]" />

                    <p className="text-sm md:text-[15px] leading-6 text-[#555B52]">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-7 border-t border-[#DDE4D9]">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-[#899083]">
                Primary Focus
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {primaryFocus.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-white border border-[#E1E6DE] text-xs md:text-sm font-medium text-[#73796F]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <article
                key={group.number}
                className="group relative bg-white border border-[#E1E6DE] rounded-2xl p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#C8D7C1] hover:shadow-[0_18px_45px_rgba(40,60,35,0.07)]"
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EEF3EB] text-sm font-semibold tracking-[0.03em] text-[#5B5BD6] group-hover:bg-[#5B5BD6] group-hover:text-white transition-all duration-300">
                    {group.number}
                  </span>

                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#899083]">
                    Expertise
                  </span>
                </div>

                <h3 className="text-2xl md:text-[26px] tracking-[0.01em] text-[#171717] group-hover:text-[#5B5BD6] transition-colors duration-300">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6F746B]">
                  {group.description}
                </p>

                <div className="mt-6 pt-5 border-t border-[#E1E6DE]">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-[#F7F7FC] border border-[#E1E6DE] text-xs md:text-sm font-medium text-[#73796F] transition-all duration-300 group-hover:border-[#CDD8C8] group-hover:bg-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#5B5BD6] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeySkills;
