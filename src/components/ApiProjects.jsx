import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL =
    "https://aaryan-jais.github.io/jsonfile/projects.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setProjects(res.data.projects);
      } catch (err) {
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full bg-[#F7F7FC] py-20 md:py-28 border-t border-[#E3E3F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-[#5B5BD6]" />

              <h4 className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#5B5BD6]">
                API Integration
              </h4>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[0.01em] text-[#171717]">
              Projects from
              <br />
              <span className="text-[#5B5BD6]">my API.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 tracking-[0.005em] text-[#62626E]">
            Projects dynamically loaded from a REST API using Axios,
            demonstrating asynchronous data fetching and dynamic React
            rendering.
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-sm font-medium tracking-[0.01em] text-[#5B5BD6]">
              <span className="w-5 h-5 border-2 border-[#DDDDF2] border-t-[#5B5BD6] rounded-full animate-spin" />
              Loading API projects...
            </div>
          </div>
        )}

        {error && (
          <div className="bg-white border border-[#E3E3F2] rounded-2xl p-8 text-center">
            <p className="text-sm font-medium tracking-[0.005em] text-[#62627A]">
              {error}
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group relative flex flex-col min-h-[360px] p-7 md:p-8 bg-white border border-[#E3E3F2] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#CFCFF0] hover:shadow-[0_20px_50px_rgba(70,70,150,0.08)]"
              >
                <div className="absolute -top-14 -right-14 w-32 h-32 rounded-full border border-[#5B5BD6]/10 transition-transform duration-700 group-hover:scale-125" />

                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-full bg-[#F1F1FC] rounded-bl-[80px] transition-all duration-500 group-hover:bg-[#E8E8FA]" />

                  <span className="absolute top-5 right-6 text-sm font-semibold tracking-[0.05em] text-[#5B5BD6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative z-10 mb-12">
                  <span className="inline-flex px-3 py-1.5 rounded-full bg-[#F7F7FC] border border-[#E3E3F2] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#62627A] group-hover:bg-[#F1F1FC] group-hover:border-[#DDDDF2] group-hover:text-[#5B5BD6] transition-colors duration-300">
                    API Project
                  </span>
                </div>

                <h3 className="relative z-10 text-2xl md:text-3xl tracking-[0.01em] text-[#171717] group-hover:text-[#5B5BD6] transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="relative z-10 mt-4 text-sm md:text-base leading-7 tracking-[0.005em] text-[#62626E] line-clamp-3">
                  {project.description || "No description available."}
                </p>

                <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                  {Array.isArray(project.languages) ? (
                    project.languages.map((language) => (
                      <span
                        key={language}
                        className="px-3 py-1.5 rounded-full bg-white border border-[#E3E3F2] text-xs font-medium tracking-[0.01em] text-[#62627A] group-hover:border-[#D5D5EE] transition-colors duration-300"
                      >
                        {language}
                      </span>
                    ))
                  ) : (
                    <span className="px-3 py-1.5 rounded-full bg-white border border-[#E3E3F2] text-xs font-medium tracking-[0.01em] text-[#62627A]">
                      {project.languages || "Web"}
                    </span>
                  )}
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-[#171717] hover:text-[#5B5BD6] transition-colors duration-300"
                  >
                    View Project

                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#171717] text-white text-sm transition-all duration-300 group-hover:bg-[#5B5BD6] group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#5B5BD6] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
