import React from "react";

const Skills = () => {

  const skills = [
    { name: "React JS", level: "90%" },
    { name: "Tailwind CSS", level: "85%" },
    { name: "JavaScript (ES6+)", level: "88%" },
    { name: "HTML / CSS", level: "95%" },
    { name: "Git & GitHub", level: "80%" },
    { name: "Responsive Design", level: "92%" },
  ];

      const imageUrl = 
'./src/assets/hero_bg.webp';

  return (
    <section className="w-full py-16 bg-gray-50 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          My Skills
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {skills.map((skill, index) => (
            <div key={index} className="bg-[#0E0C21] py-12 px-6  rounded-xl border shadow-md hover:-translate-y-2 transition-all duration-300">
             
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-white">
                  {skill.name}
                </span>
                <span className="text-lg font-semibold text-white">
                  {skill.level}
                </span>
              </div>

             
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
