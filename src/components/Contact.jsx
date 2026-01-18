import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <section id="contact" className="py-20 bg-gray-50 text-center mt-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

       
        <div className="md:col-span-1 bg-white p-8 rounded-2xl shadow-lg border">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Info</h2>

          <ul className="space-y-5 text-gray-700 text-md">
            <li>
              <span className="font-semibold text-gray-900">Address:</span><br />
              Tarapur, Munger, Bihar
            </li>
            <li>
              <span className="font-semibold text-gray-900">Email:</span><br />
              <a href="mailto:aaryanjaiswal195@gmail.com" className="text-black">
                aaryanjaiswal195@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Phone:</span><br />
              +91 79080331352
            </li>
            <li>
              <span className="font-semibold text-gray-900">Linkedin:</span><br />
              https://www.linkedin.com/in/aaryan-raj-586501118/

            </li>
          </ul>
        </div>

       
        <div className="md:col-span-2 bg-white p-10 rounded-2xl shadow-lg border">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Me a Message</h2>
         <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="bg-[#f5487f] text-white py-3 uppercase rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
      </div>
      </div>
     
    </section>
     </>
  );
}

export default Contact;
