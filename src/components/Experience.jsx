import React from "react";

const experienceData = [
  {
    role: "Senior Web Designer",
    company: "Simplia Inc, USA (Formerly Lotus Interworks Inc)",
    duration: "Aug 2022 – Sep 2025",
    points: [
      "Built 100+ responsive UI screens, improving performance score from 70 → 95 using HTML, CSS, JavaScript",
      "Collaborated with developers and product teams across time zones",
      "Improved website performance using Lighthouse & PageSpeed Insights",
      "Created reusable UI components, wireframes, and design systems",
      "Managed multiple international client projects",
    ],
  },
  {
    role: "Web Designer",
    company: "Web Smile India, Noida",
    duration: "Jan 2022 – Aug 2022",
    points: [
      "Developed fully responsive webpages",
      "Built SEO-friendly, multi-browser compatible layouts",
      "Implemented frontend scripts using JavaScript",
    ],
  },
  {
    role: "Web Designer",
    company: "Netking Web Services Pvt. Ltd, Noida",
    duration: "Dec 2019 – Jan 2022",
    points: [
      "Converted PSD designs to clean HTML",
      "Created custom CSS animations",
      "Implemented responsive layouts using media queries",
    ],
  },
  {
    role: "Freelance Web Designer",
    company: "Switch2Us",
    duration: "Freelance",
    points: [
      "Designed and developed complete websites end-to-end",
      "Ensured SEO optimization and multi-device compatibility",
    ],
  },
];

export default function Experience() {
  return (
    <section className="bg-[#0E0C21] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-14 text-center">
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>

        <div className="relative border-l border-white/10 pl-6 space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500" />

              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 hover:bg-white/10 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="text-slate-400 text-sm">{item.company}</p>
                  </div>
                  <span className="mt-2 md:mt-0 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    {item.duration}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
