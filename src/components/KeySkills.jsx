import React from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "jQuery",
  "WordPress"
];

export default function KeySkills() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-gray-800/60 border border-gray-700 
                       shadow-xl hover:shadow-blue-600/40 
                       backdrop-blur-sm cursor-pointer text-center 
                       transition-all"
          >
            <h3 className="text-lg font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
