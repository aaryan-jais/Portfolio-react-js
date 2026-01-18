import React from "react";
import { Link } from "react-router";
import Education from "./Education";
import Experience from "./Experience";
import KnowBackend from "./KnowBackend";

function Home() {
    const imageUrl = 
'/images/hero_bg.webp';
   const profileUrl = 
'/images/profile.webp';
   


  return (
    <>
    <section id="home" className="pt-16 pb-16  flex flex-col justify-center items-center text-center text-white bg-cover bg-center mt-20" style={{ backgroundImage: `url(${imageUrl})` }}>
        <img src={profileUrl} alt="Profile" className="max-w-70 py-6" />
      <h1 className="text-2xl font-bold mb-4">Hi, I'm Aaryan Raj</h1>
            <h2 className=" text-3xl leading-10 md:text-6xl md:leading-16 font-bold mb-4 max-w-260">Building Fast, Beautiful, & Interactive User Interfaces</h2>

      <p className="text-sm text-center leading-6 mb-6 max-w-210 px-2 ">I am a Front-End Developer specializing in building modern, responsive, and user-friendly web applications using React JS. I enjoy turning ideas into real digital experiences through clean UI, smooth interactions, and optimized performance. My focus is on writing clean, maintainable code and creating interfaces that look great on every device.</p>
      <Link to="/projects" className="px-12 py-4 mt-3 mb-12 bg-[#f5487f] text-white-600 rounded-lg font-semibold uppercase 2hover:bg-gray-200 transition">
        View My Work
      </Link>
    </section>
    <Education/>
    <Experience/>
    <KnowBackend/>

    </>
  );
}

export default Home;
