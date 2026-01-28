import React from "react";


const educationData = [
  {
    institute: "Netaji Subhash Engineering College, Kolkata",
    degree: "B-Tech, Mechanical Engineering",
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
    <section className="w-full py-16 bg-[#0E0C21]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center px-6">

        <div className="md:col-span-3">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Education
          </span>
        </h2>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/80 backdrop-blur rounded-2xl p-6 border border-white/10
                   hover:border-indigo-500/50 hover:-translate-x-2 transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative">
                  <h3 className="text-lg font-semibold text-white">
                    {item.institute}
                  </h3>

                  <p className="text-sm text-slate-400 mt-1">
                    {item.degree}
                  </p>

                  <p className="mt-2 text-sm font-medium text-indigo-400">
                    {item.scoreLabel}: {item.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:col-span-2">
          <img
            src="/images/education.webp"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
