
import React from "react";


const projects = [
  {
    title: "MERN E-Commerce App",
    description:
      "Full-featured e-commerce platform with secure authentication and admin controls.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    features: [
      "JWT-based login & signup",
      "Admin panel (Add / Edit / Delete products)",
      "Secure REST APIs",
    ],
    link: "https://frontend-mern-neon.vercel.app/",
    
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Authentication System (MERN)",
    description:
      "Robust authentication system with protected routes and middleware-based security.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    features: [
      "User login & registration",
      "Protected routes",
      "Token-based auth middleware",
    ],
    link: "https://portalf.vercel.app/",
    
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio with smooth animations and reusable UI components.",
    tech: ["React", "Tailwind CSS"],
    features: [
      "Fully responsive layout",
      "Performance optimized",
      "Animated reusable components",
    ],
    link: "#",
    
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function ProjectsHome() {
  return (
    <section className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2
          
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Full-Stack Projects
          </span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
             
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-40 blur-xl group-hover:opacity-70 transition`}
              />

              <div className="relative h-full rounded-2xl bg-slate-900/90 backdrop-blur p-6 flex flex-col">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}
                >
                  <i className="fab fa-node-js w-6 h-6 pt-1 text-3xl text-white mb-4"></i>
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                <ul className="text-sm text-slate-300 space-y-1 mb-4">
                  {project.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
                >
                  View Project 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
