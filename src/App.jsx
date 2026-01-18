import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router>
    <div className="min-h-screen flex flex-col bg-gray100">
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
