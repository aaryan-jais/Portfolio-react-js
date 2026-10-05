import React from "react";

const educationData = [
  {
    institute: "Netaji Subhash Engineering College, Kolkata",
    degree: "B-Tech",
    scoreLabel: "DGPA",
    score: "8.38",
  },
  {
    institute: "R.S College, Tarapur",
    degree: "12th, Science",
    scoreLabel: "Percentage",
    score: "73.2%",
  },
  {
    institute: "Adarsh High School, Tarapur",
    degree: "10th",
    scoreLabel: "Percentage",
    score: "78.6%",
  },
];

const Education = () => {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-[#E3E3F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-[#5B5BD6]" />

              <h4 className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#5B5BD6]">
                Education
              </h4>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[0.01em] text-[#171717]">
              Academic{" "}
              <span className="text-[#5B5BD6]">background.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 tracking-[0.005em] text-[#62626E]">
              My academic journey started with engineering and built a strong
              foundation in problem-solving, mathematics and analytical
              thinking.
            </p>

            <div className="mt-12 space-y-4">
              {educationData.map((item, index) => (
                <article
                  key={item.institute}
                  className="group relative bg-[#F7F7FC] border border-[#E3E3F2] rounded-2xl p-6 md:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:border-[#CFCFF0] hover:shadow-[0_18px_45px_rgba(70,70,150,0.07)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div className="flex gap-5">
                      <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#DDDDF2] text-xs font-semibold tracking-[0.03em] text-[#5B5BD6] group-hover:bg-[#5B5BD6] group-hover:text-white group-hover:border-[#5B5BD6] transition-all duration-300">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="text-lg md:text-xl tracking-[0.005em] text-[#171717] group-hover:text-[#5B5BD6] transition-colors duration-300">
                          {item.institute}
                        </h3>

                        <p className="mt-2 text-sm tracking-[0.005em] text-[#62627A]">
                          {item.degree}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right pl-[60px] sm:pl-0">
                      <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#858594]">
                        {item.scoreLabel}
                      </p>

                      <p className="mt-1 text-xl tracking-[0.02em] text-[#171717] group-hover:text-[#5B5BD6] transition-colors duration-300">
                        {item.score}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#5B5BD6] transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[430px]">
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#5B5BD6] rounded-tl-[40px]" />

              <div className="relative z-10 overflow-hidden bg-[#F1F1FC] rounded-sm">
                <img
                  src="/images/education.jpg"
                  alt="Education"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="relative z-20 -mt-1 bg-[#171717] text-white px-6 py-5">
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#858594]">
                  Academic Foundation
                </p>

                <p className="text-sm md:text-base font-medium tracking-[0.005em] mt-2">
                  Engineering · Science · Mathematics
                </p>
              </div>

              <div className="absolute -bottom-5 -left-5 w-20 h-20 border-l-2 border-b-2 border-[#5B5BD6] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
