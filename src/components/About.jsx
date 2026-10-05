import React from "react";
import Skills from "./Skills";
import { Link } from "react-router";
import ApiProjects from "./ApiProjects";

function About() {
  return (
    <>
      <section className="w-full bg-white pt-32 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-[#EEF3EB] pointer-events-none" />

              <div className="relative z-10 overflow-hidden bg-[#EEF3EB]">
                <img
                  src="/images/about-us.webp"
                  alt="About Aaryan Raj"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-r-2 border-b-2 border-[#5B5BD6] pointer-events-none" />

              <div className="absolute bottom-5 left-5 z-20 bg-[#171717] px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#5B5BD6]">
                  Experience
                </p>
                <p className="mt-1 text-xl tracking-[0.025em] text-white">
                  5+ Years
                </p>
              </div>
            </div>

            <div>
              {/* <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-[2px] bg-[#5B5BD6]" />
                <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5BD6]">
                  About Me
                </p>
              </div> */}

              <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[0.01em] text-[#171717]">
                About  <span className="text-[#5B5BD6]">
                  Me
                </span>
              </h2>

              <div className="mt-4 space-y-5 max-w-3xl">
                <p className="text-base md:text-md text-[#6F746B] leading-7 tracking-[0.005em]">
                  I have strong hands-on experience working with React.js,
                  building modern, responsive and high-performance frontend
                  applications. Over time, I've worked on multiple projects
                  where I leveraged React's component-based architecture,
                  hooks and state management to create clean, scalable user
                  interfaces.
                </p>

                <p className="text-base md:text-md text-[#6F746B] leading-7 tracking-[0.005em]">
                  I work with REST APIs using fetch and Axios, dynamically
                  updating interfaces based on real-time data. This allows me
                  to build practical applications such as dashboards,
                  e-commerce experiences and data-driven web applications.
                </p>

                <p className="text-base md:text-md text-[#6F746B] leading-7 tracking-[0.005em]">
                  I also create multi-page experiences using React Router,
                  including dynamic routes, nested routes and URL parameters
                  while keeping the overall navigation experience simple and
                  intuitive.
                </p>

                <p className="text-base md:text-md text-[#6F746B] leading-7 tracking-[0.005em]">
                  I combine React with Tailwind CSS to create fast, responsive
                  and visually polished interfaces while keeping the code
                  clean, reusable and maintainable.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link
                  to="/images/aaryan_resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-[#171717] text-white text-sm font-semibold tracking-[0.01em] rounded-md hover:bg-[#5B5BD6] transition-colors duration-300"
                >
                  Download CV
                  <span className="text-lg leading-none">↓</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 border border-[#D5DCD1] text-[#171717] text-sm font-semibold tracking-[0.01em] rounded-md hover:border-[#5B5BD6] hover:text-[#5B5BD6] transition-colors duration-300"
                >
                  Let's Talk
                  <span>↗</span>
                </Link>
              </div>

              <div className="grid grid-cols-3 max-w-xl mt-12 pt-7 border-t border-[#E1E6DE]">
                <div>
                  <p className="text-3xl md:text-4xl tracking-[0.025em] text-[#171717]">
                    5+
                  </p>
                  <p className="mt-2 text-xs md:text-sm tracking-[0.02em] text-[#73796F]">
                    Years Experience
                  </p>
                </div>

                <div className="border-l border-[#E1E6DE] pl-5 md:pl-8">
                  <p className="text-3xl md:text-4xl tracking-[0.025em] text-[#171717]">
                    100+
                  </p>
                  <p className="mt-2 text-xs md:text-sm tracking-[0.02em] text-[#73796F]">
                    UI Screens
                  </p>
                </div>

                <div className="border-l border-[#E1E6DE] pl-5 md:pl-8">
                  <p className="text-3xl md:text-4xl tracking-[0.025em] text-[#171717]">
                    95+
                  </p>
                  <p className="mt-2 text-xs md:text-sm tracking-[0.02em] text-[#73796F]">
                    Lighthouse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApiProjects />
      <Skills />
    </>
  );
}

export default About;