import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#F7F7FC] pt-32 pb-24 md:pb-32 border-t border-[#E3E3F2]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-[#5B5BD6]" />

              <h4 className="text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-[#5B5BD6]">
                Contact
              </h4>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[0.01em] text-[#171717]">
              Let's work
              <br />
              <span className="text-[#5B5BD6]">together.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base md:text-md leading-7 tracking-[0.005em] text-[#62626E]">
            Have a project, opportunity or idea in mind? Feel free to get in
            touch. I'm always open to discussing frontend development and UI
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-5">
          <div className="relative bg-[#171717] rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#5B5BD6] rounded-bl-[100px] opacity-90" />

            <div className="absolute bottom-[-80px] left-[-80px] w-44 h-44 rounded-full border border-white/5 pointer-events-none" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-[#7B7BE5]">
                Get in touch
              </p>

              <h3 className="mt-4 text-3xl md:text-4xl tracking-[0.01em] text-white">
                Contact Info
              </h3>

              <div className="mt-10 space-y-7">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#858594]">
                    Location
                  </p>

                  <p className="mt-2 text-sm md:text-base tracking-[0.005em] text-[#E4E4EA]">
                    Tarapur, Munger, Bihar
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#858594]">
                    Email
                  </p>

                  <a
                    href="mailto:aaryanjaiswal195@gmail.com"
                    className="inline-block mt-2 text-sm md:text-base tracking-[0.005em] text-white hover:text-[#7B7BE5] transition-colors duration-300"
                  >
                    aaryanjaiswal195@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#858594]">
                    Phone
                  </p>

                  <a
                    href="tel:+917541068293"
                    className="inline-block mt-2 text-sm md:text-base tracking-[0.005em] text-white hover:text-[#7B7BE5] transition-colors duration-300"
                  >
                    +91 7541068293
                  </a>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#858594]">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/aaryan-raj-586501118/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm md:text-base tracking-[0.005em] text-white hover:text-[#7B7BE5] transition-colors duration-300 break-all"
                  >
                    linkedin.com/in/aaryan-raj-586501118/
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-[0.16em] text-[#858594]">
                  Available for
                </p>

                <p className="mt-2 text-sm tracking-[0.005em] text-[#E4E4EA]">
                  Frontend Development · UI Development · Web Projects
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#E3E3F2] hover:border-[#D2D2EF] transition-colors duration-300">
            <div className="flex items-center justify-between gap-5 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] font-semibold text-[#5B5BD6]">
                  Start a conversation
                </p>

                <h3 className="mt-2 text-3xl md:text-4xl tracking-[0.01em] text-[#171717]">
                  Send Me a Message
                </h3>
              </div>

              <span className="hidden sm:flex w-12 h-12 rounded-full bg-[#F1F1FC] items-center justify-center text-[#5B5BD6] text-xl">
                ↗
              </span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#73737F]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-[#E3E3F2] bg-[#F7F7FC] text-sm tracking-[0.005em] text-[#171717] placeholder-[#9999A6] outline-none transition-all duration-300 focus:border-[#5B5BD6] focus:ring-2 focus:ring-[#F1F1FC]"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#73737F]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-[#E3E3F2] bg-[#F7F7FC] text-sm tracking-[0.005em] text-[#171717] placeholder-[#9999A6] outline-none transition-all duration-300 focus:border-[#5B5BD6] focus:ring-2 focus:ring-[#F1F1FC]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#73737F]">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="7"
                  className="w-full px-4 py-3.5 rounded-lg border border-[#E3E3F2] bg-[#F7F7FC] text-sm leading-7 tracking-[0.005em] text-[#171717] placeholder-[#9999A6] outline-none resize-none transition-all duration-300 focus:border-[#5B5BD6] focus:ring-2 focus:ring-[#F1F1FC]"
                  required
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 w-full md:w-fit px-8 py-4 bg-[#171717] text-white text-sm font-semibold tracking-[0.01em] rounded-md hover:bg-[#5B5BD6] transition-colors duration-300"
              >
                Send Message

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* <div className="mt-12 pt-8 border-t border-[#E3E3F2] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm tracking-[0.005em] text-[#858594]">
            Open to frontend development opportunities
          </p>

          <p className="text-sm font-medium tracking-[0.005em] text-[#171717]">
            React.js
            <span className="mx-2 text-[#CFCFE2]">·</span>
            JavaScript
            <span className="mx-2 text-[#CFCFE2]">·</span>
            UI Development
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
