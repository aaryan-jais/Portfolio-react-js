import React from "react";

const HomeCTA = () => {
  return (
    <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-10 -mb-28">
      <div className="relative overflow-hidden bg-[#171717] rounded-[1px]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full bg-[#5B5BD6]/10 blur-3xl animate-[ctaFloat_10s_ease-in-out_infinite]" />

          <div className="absolute -bottom-40 left-[30%] w-[380px] h-[380px] rounded-full bg-[#5B5BD6]/[0.07] blur-3xl animate-[ctaFloatReverse_13s_ease-in-out_infinite]" />

          <div className="absolute -top-24 right-[8%] w-[330px] h-[330px] rounded-full border border-[#5B5BD6]/20 animate-[ctaSpin_22s_linear_infinite]" />

          <div className="absolute -top-16 right-[13%] w-[210px] h-[210px] rounded-full border border-[#5B5BD6]/10 animate-[ctaSpinReverse_16s_linear_infinite]" />

          <div className="absolute top-[25%] left-[48%] w-3 h-3 rounded-full bg-[#5B5BD6]/60 animate-[ctaPulse_4s_ease-in-out_infinite]" />

          <div className="absolute bottom-[20%] right-[32%] w-2 h-2 rounded-full bg-[#5B5BD6]/50 animate-[ctaPulse_3s_ease-in-out_infinite]" />

          <div className="absolute top-[15%] right-[5%] w-16 h-16 rounded-full bg-[#5B5BD6]/10 animate-[ctaFloat_7s_ease-in-out_infinite]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#5B5BD6 1px, transparent 1px), linear-gradient(90deg, #5B5BD6 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_1fr_1fr]">
          <div className="py-10 md:py-12 lg:py-14 px-7 md:px-10 lg:px-12 lg:pr-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-[2px] bg-[#5B5BD6]" />

              <h4 className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#5B5BD6]">
                Let's Work Together
              </h4>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[0.01em] text-white">
              Let's build something
              <br />
              <span className="text-[#5B5BD6]">great together.</span>
            </h2>

            {/* <p className="max-w-2xl mt-6 text-sm md:text-base leading-7 text-[#A8ADA5]">
              Have a project, frontend opportunity or an idea in mind? I'm
              available for creating thoughtful, responsive and high-quality
              digital experiences.
            </p> */}
          </div>

          <div className="relative flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#353A33]">
            <a
              href="mailto:aaryanjaiswal195@gmail.com"
              className="group w-full h-full min-h-[170px] lg:min-h-[270px] flex flex-col items-center justify-center gap-5 hover:bg-[#1D211D] transition-all duration-500"
            >
              <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#5B5BD6] text-white text-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                ↗
              </span>

              <div className="text-center">
                <span className="block text-xs uppercase tracking-[0.16em] text-[#7F857C]">
                  Email
                </span>

                <span className="block mt-2 text-lg tracking-[0.01em] text-white">
                  Mail Me
                </span>
              </div>
            </a>
          </div>

          <div className="relative flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#353A33]">
            <a
              href="tel:+917541068293"
              className="group w-full h-full min-h-[170px] lg:min-h-[270px] flex flex-col items-center justify-center gap-5 hover:bg-[#1D211D] transition-all duration-500"
            >
              <span className="w-14 h-14 flex items-center justify-center rounded-full border border-[#5B5BD6] text-[#5B5BD6] text-xl transition-all duration-500 group-hover:bg-[#5B5BD6] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6">
                ↗
              </span>

              <div className="text-center">
                <span className="block text-xs uppercase tracking-[0.16em] text-[#7F857C]">
                  Phone
                </span>

                <span className="block mt-2 text-lg tracking-[0.01em] text-white">
                  Call Me
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ctaFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(45px, -30px, 0);
          }
        }

        @keyframes ctaFloatReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-35px, 25px, 0);
          }
        }

        @keyframes ctaSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ctaSpinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes ctaPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.8);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeCTA;