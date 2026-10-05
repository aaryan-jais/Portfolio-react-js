import React from "react";

const FrontendStatement = () => {
  const principles = [
    {
      number: "01",
      title: "Interface",
      text: "Clean & intuitive",
    },
    {
      number: "02",
      title: "Engineering",
      text: "Structured & scalable",
    },
    {
      number: "03",
      title: "Experience",
      text: "Fast & responsive",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#171717] py-14 md:py-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[260px] rounded-full bg-[#5B5BD6]/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden">
          {principles.map((item, index) => (
            <article
              key={item.number}
              className={`group relative min-h-[180px] p-7 md:p-9 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.035] ${
                index !== principles.length - 1
                  ? "border-b md:border-b-0 md:border-r border-white/10"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#7B7BE5]">
                  {item.number}
                </span>

                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-sm text-[#777784] group-hover:border-[#5B5BD6] group-hover:text-[#7B7BE5] transition-all duration-300">
                  ↗
                </span>
              </div>

              <div className="mt-10">
                <h3 className="text-xl md:text-2xl tracking-[-0.01em] text-white group-hover:text-[#7B7BE5] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-[#858590]">
                  {item.text}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#5B5BD6] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontendStatement;
