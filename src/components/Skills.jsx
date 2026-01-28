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
    <section className="w-full py-20 bg-[#0E0D3D]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
       
        <h2 className="text-3xl md:text-6xl font-bold text-white text-center mb-16">
          My <span className="text-blue-400">Skills</span>
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-[#0E0C21] py-10 px-6 rounded-2xl border border-white/10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
             
              <div className="flex justify-between mb-4">
                <span className="text-lg font-semibold text-white">{skill.name}</span>
                <span className="text-lg font-semibold text-white">{skill.level}</span>
              </div>

            
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
               
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transition-all duration-700"
                  style={{ width: skill.level }}
                ></div>
              </div>

             
              <div
                className="absolute top-10 right-4 w-4 h-4 bg-blue-400 rounded-full blur-md opacity-60 animate-pulse"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
