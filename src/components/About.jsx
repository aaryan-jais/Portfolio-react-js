import React from "react";
import Skills from "./Skills";
import { Link } from "react-router";
import ApiProjects from "./ApiProjects";

function About() {

    return (
        <>
            <section className="w-full py-16  bg-[#0E0C21] mt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">


                    <div className="md:col-span-1">
                        <div className="w-full overflow-hidden">
                            <img
                                src="/images/about-us.webp"
                                alt="About"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    <div className="md:col-span-2 space-y-5">
                        <h2 className="text-3xl md:text-6xl font-bold text-white">
                            About Me
                        </h2>

                        <p className="text-white leading-relaxed text-md">
                            I have strong hands-on experience working with React JS, building modern, responsive, and high-performance front-end applications. Over time, I’ve worked on multiple projects where I leveraged React’s component-based architecture, hooks, and state management to create clean, scalable user interfaces.
                        </p>

                        <p className="text-white leading-relaxed text-md">
                            I fetch data from REST APIs using fetch or axios, then dynamically update UI based on the results. This helps build interactive apps like weather apps, dashboards, and e-commerce pages.
                        </p>
                        <p className="text-white leading-relaxed text-md">
                            I create multi-page UI experiences using React Router, adding features like dynamic routes, nested routes, and URL parameters.
                        </p>
                        <p className="text-white leading-relaxed text-md pb-6">
                            I combine React with Tailwind CSS to create fast, responsive, and beautifully designed interfaces while keeping the code clean and utility-based.      
                             </p>
                        <Link to="/images/resume.pdf" target="_blank" className="px-12 py-4 mt-5 mb-12 bg-[#f5487f] text-white rounded-lg font-semibold uppercase hover:bg-gray-200 hover:text-black transition">
                            Download CV
                        </Link>

                    </div>
                </div>
            </section>
            
             <ApiProjects/>
             <Skills />
        </>


    );
}

export default About;
