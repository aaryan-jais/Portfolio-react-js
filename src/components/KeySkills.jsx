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
      <h2 className="text-4xl md:text-6xl font-bold mb-14 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </span>
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
