import React from "react";
import { Link } from "react-router";
import ProjectsHome from "./ProjectsHome";
import Experience from "./Experience";
import KeySkills from "./KeySkills";
import Education from "./Education";
import HomeCTA from "./HomeCTA";
import FrontendStatement from "./FrontendStatement";

function Home() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[#FAFBF8] pt-20"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#5B5BD6]/[0.07] blur-3xl animate-[floatSlow_12s_ease-in-out_infinite]" />

          <div className="absolute top-[18%] left-[42%] w-20 h-20 rounded-full bg-[#5B5BD6]/[0.08] animate-[floatSmall_8s_ease-in-out_infinite]" />

          <div className="absolute top-[10%] right-[7%] w-28 h-28 rounded-full bg-[#5B5BD6]/[0.06] animate-[floatSmall_10s_ease-in-out_infinite_reverse]" />

          <div className="absolute bottom-[14%] left-[8%] w-14 h-14 rounded-full bg-[#5B5BD6]/[0.08] animate-[pulse_5s_ease-in-out_infinite]" />

          <div className="absolute bottom-[10%] right-[34%] w-10 h-10 rounded-full bg-[#5B5BD6]/[0.07] animate-[floatSmall_7s_ease-in-out_infinite_reverse]" />

          <div className="absolute top-[12%] right-[8%] w-[280px] h-[280px] rounded-full border border-[#5B5BD6]/10 animate-[spinSlow_24s_linear_infinite]" />

          <div className="absolute top-[18%] right-[13%] w-[190px] h-[190px] rounded-full border border-[#5B5BD6]/10 animate-[spinReverse_18s_linear_infinite]" />

          <div className="absolute bottom-[8%] left-[38%] w-[120px] h-[120px] rounded-full border border-[#5B5BD6]/10 animate-[floatSmall_9s_ease-in-out_infinite]" />

          <div className="absolute top-[30%] left-[50%] w-2 h-2 rounded-full bg-[#5B5BD6]/35 animate-[pulse_4s_ease-in-out_infinite]" />

          <div className="absolute top-[58%] left-[7%] w-1.5 h-1.5 rounded-full bg-[#5B5BD6]/30 animate-[pulse_5s_ease-in-out_infinite]" />

          <div className="absolute bottom-[20%] right-[42%] w-2 h-2 rounded-full bg-[#5B5BD6]/30 animate-[pulse_3.5s_ease-in-out_infinite]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#5B5BD6 1px, transparent 1px), linear-gradient(90deg, #5B5BD6 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="min-h-[calc(100vh-80px)] grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-20">
            <div className="py-16 lg:py-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[2px] bg-[#5B5BD6]" />

                <h4 className="text-sm font-medium uppercase tracking-[0.12em] text-[#5B5BD6]">
                  React Developer · UI Engineer · Frontend Specialist
                </h4>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-6xl xl:text-[82px] leading-[1] tracking-[0.015em] text-[#171717]">
                Frontend Developer & <span className="text-[#5B5BD6]">
                  UI Specialist!
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base md:text-md leading-8 tracking-[0.005em] text-[#6F746B]">
                I'm Aaryan Raj, a frontend developer and UI specialist with
                5+ years of professional experience building responsive
                websites, web applications and polished user interfaces.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-[#171717] text-white text-sm font-semibold tracking-[0.01em] uppercase rounded-[2px] hover:bg-[#5B5BD6] transition-colors duration-300"
                >
                  View My Work
                  <span className="text-lg leading-none">↗</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 border border-[#D5DCD1] text-[#171717] text-sm font-semibold tracking-[0.01em] uppercase rounded-[2px] hover:border-[#5B5BD6] hover:text-[#5B5BD6] transition-colors duration-300"
                >
                  Let's Talk
                </Link>
              </div>

              <div className="grid grid-cols-3 max-w-xl mt-14 pt-8 border-t border-[#E1E6DE]">
                <div>
                  <h4 className="text-4xl md:text-5xl tracking-[0.025em] text-[#171717]">
                    5+
                  </h4>

                  <p className="mt-2 text-xs md:text-sm font-medium tracking-[0.02em] text-[#6F746B]">
                    Years Experience
                  </p>
                </div>

                <div className="border-l border-[#E1E6DE] pl-5 md:pl-8">
                  <h4 className="text-4xl md:text-5xl tracking-[0.025em] text-[#171717]">
                    100+
                  </h4>

                  <p className="mt-2 text-xs md:text-sm font-medium tracking-[0.02em] text-[#6F746B]">
                    UI Screens
                  </p>
                </div>

                <div className="border-l border-[#E1E6DE] pl-5 md:pl-8">
                  <h4 className="text-4xl md:text-5xl tracking-[0.025em] text-[#171717]">
                    95+
                  </h4>

                  <p className="mt-2 text-xs md:text-sm font-medium tracking-[0.02em] text-[#6F746B]">
                    Lighthouse
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end py-12 lg:py-20">
              <div className="relative w-full max-w-[480px]">
                <div className="absolute -top-10 -right-16 w-[430px] h-[430px] rounded-full border border-[#5B5BD6]/10 pointer-events-none animate-[spinSlow_30s_linear_infinite]" />

                <div className="absolute -top-4 -right-10 w-[330px] h-[330px] rounded-full border border-[#5B5BD6]/10 pointer-events-none animate-[spinReverse_22s_linear_infinite]" />

                <div className="absolute top-[8%] right-[20%] w-8 h-8 rounded-full bg-[#5B5BD6]/[0.10] animate-[floatSmall_6s_ease-in-out_infinite] pointer-events-none" />

                <div className="absolute top-[28%] -right-5 w-3 h-3 rounded-full bg-[#5B5BD6]/40 animate-[pulse_4s_ease-in-out_infinite] pointer-events-none" />

                <div className="absolute top-[5%] right-[35%] w-2 h-2 rounded-full bg-[#5B5BD6]/35 animate-[pulse_3s_ease-in-out_infinite] pointer-events-none" />

                <div className="absolute -bottom-8 -left-12 w-24 h-24 rounded-full bg-[#5B5BD6]/[0.06] blur-xl pointer-events-none" />

                {/* <div className="absolute -top-8 left-0 z-20">
                  <p className="text-xs uppercase tracking-[0.16em] font-medium text-[#899083]">
                    Aaryan Raj
                  </p>
                </div> */}

                <div className="relative overflow-hidden bg-[#EEF3EB]">
                  <img
                    src="/images/profile.jpg"
                    alt="Aaryan Raj"
                    className="w-full aspect-[4/5] object-cover object-center"
                  />
                </div>

                <div className="border-b border-l border-r border-[#E1E6DE] bg-white px-6 py-5">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] font-medium text-[#899083]">
                        Specialization
                      </p>

                      <p className="mt-1 text-sm font-semibold tracking-[0.005em] text-[#222222]">
                        React · JavaScript · UI Development
                      </p>
                    </div>

                    <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#171717] text-white items-center justify-center text-lg hover:bg-[#5B5BD6] transition-colors duration-300">
                      ↗
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-5 w-24 h-24 border-r-2 border-b-2 border-[#5B5BD6] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 text-[#899083] pointer-events-none">
          

          <span className="w-px h-10 bg-[#5B5BD6]/30" />
        </div>

        <style>{`
          @keyframes floatSlow {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(30px, -25px, 0);
            }
          }

          @keyframes floatSmall {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(16px, -20px, 0);
            }
          }

          @keyframes spinSlow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spinReverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
        `}</style>
      </section>
      <HomeCTA />
      <ProjectsHome />
      <FrontendStatement />
      <Experience />
      <KeySkills />
      <Education />
    </>
  );
}

export default Home;