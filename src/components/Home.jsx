import React from "react";
import { Link } from "react-router";
import Education from "./Education";
import Experience from "./Experience";
import KeySkills from "./KeySkills";
import ProjectsHome from "./ProjectsHome";

function Home() {
    const imageUrl = 
'/images/hero_bg.webp';
   const profileUrl = 
'/images/profile.webp';
   


  return (
    <>
    <section id="home" className="pt-16 pb-16 px-5  flex flex-col justify-center items-center text-center text-white bg-cover bg-center mt-20" style={{ backgroundImage: `url(${imageUrl})` }}>
        <img src={profileUrl} alt="Profile" className="max-w-70 py-6" />
      <h4 className="tex-xl md:text-2xl font-bold mb-4">Hi, I'm Aaryan Raj</h4>
            <h1 className=" text-2xl leading-9 md:text-6xl md:leading-16 font-bold mb-4 max-w-260">Building Fast, Beautiful, & Interactive User Interfaces</h1>

      <p className="text-sm text-center leading-6 mb-6 max-w-210 px-2 ">Full Stack Developer (MERN) with strong Frontend expertise and
experience building scalable web applications. Completed Full Stack
Development (MERN + AI) from PW Skills and previously worked 5+
years as a Web/UI Designer, delivering high-performance, responsive
websites, reusable UI components, and optimized user experiences.
Skilled in React, Redux Toolkit, Node.js, Express, MongoDB, Tailwind, and
REST APIs.</p>
      <Link
          to="/projects"
          className="px-12 py-4 mt-3 mb-12 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-lg font-semibold uppercase shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
        >
          View My Work
        </Link>
    </section>
    <ProjectsHome/>
    <Experience/>
    <KeySkills/>
     <Education/>
 
    

    </>
  );
}

export default Home;
