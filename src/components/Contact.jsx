import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#0E0D3D] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
       
        <div className="md:col-span-1 bg-slate-900 p-8 rounded-2xl shadow-lg border border-white/10">
          <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/20 pb-2">
            Contact Info
          </h2>

          <ul className="space-y-5 text-gray-300 text-md">
            <li>
              <span className="font-semibold text-white">Address:</span><br />
              Tarapur, Munger, Bihar
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span><br />
              <a href="mailto:aaryanjaiswal195@gmail.com" className="text-blue-400 hover:underline">
                aaryanjaiswal195@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Phone:</span><br />
              +91 79080331352
            </li>
            <li>
              <span className="font-semibold text-white">LinkedIn:</span><br />
              <a href="https://www.linkedin.com/in/aaryan-raj-586501118/" target="_blank" className="text-blue-400 hover:underline" rel="noopener noreferrer">
                linkedin.com/in/aaryan-raj-586501118/
              </a>
            </li>
          </ul>
        </div>

       
        <div className="md:col-span-2 bg-slate-900 p-10 rounded-2xl shadow-lg border border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-white border-b border-white/20 pb-2">
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="max-w-full mx-auto flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-white/20 bg-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-white/20 bg-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-lg border border-white/20 bg-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-3 uppercase rounded-lg hover:scale-105 hover:shadow-lg transition transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
