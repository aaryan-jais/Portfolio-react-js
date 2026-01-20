import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://aaryan-jais.github.io/jsonfile/projects.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setProjects(res.data.projects);  // ✅ FIXED
      } catch (err) {
        setError("Failed to load API!");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
        API Integrated <span className="text-blue-400">Projects</span>
      </h2>

      {loading && (
        <div className="text-center text-xl animate-pulse text-blue-300">
          Loading API data...
        </div>
      )}

      {error && (
        <div className="text-center text-red-400 text-xl">{error}</div>
      )}

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {!loading &&
          !error &&
          projects.map((project, i) => (
            <div
              key={project.id}
              className="p-6 bg-gray-800/60 backdrop-blur-lg 
                         rounded-2xl shadow-xl border border-gray-700
                         hover:shadow-blue-600/40 transition-all"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>

              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                {project.description || "No description available."}
              </p>

              <div className="mt-4">
                <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">
                  {Array.isArray(project.languages)
                    ? project.languages.join(", ")
                    : project.languages}
                </span>

                <a
                  href={project.url}
                  target="_blank"
                  className="mt-4 block text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
