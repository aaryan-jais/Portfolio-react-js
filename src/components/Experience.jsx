import React from "react";

const Experience = () => {
  return (
    <section className="w-full bg-[#0E0D3D] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

       
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center">
          Work <span className="text-blue-600">Experience</span>
        </h2>

       
        <div className="relative  pl-8 space-y-10">

         
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 border-l-4 border-blue-500 relative">
            <span className="absolute -left-12 top-5 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs">
              AUG 2022 - SEP 2025
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 pt-6">
              Senior Web Designer
            </h3>
            <p className="text-gray-600 font-medium mb-3">
              SIMPLIA INC USA (Formly Lotus Interworks Inc)
            </p>

            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Collaborated with developers, product managers, writers & marketers.</li>
              <li>Modified and updated websites based on client requirements.</li>
              <li>Managed multiple projects, priorities & deadlines.</li>
              <li>Created UI/UX designs, wireframes, prototypes & design systems.</li>
              <li>Worked with Google Analytics & Google Search Console.</li>
            </ul>
          </div>

        
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 border-l-4 border-green-500 relative">
            <span className="absolute -left-12 top-5 bg-green-600 text-white px-3 py-1 rounded-lg text-xs">
              JAN 2022 - AUG 2022
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 pt-6">
              Web Developer
            </h3>
            <p className="text-gray-600 font-medium mb-3">
              Web Smile India, Noida
            </p>

            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Developed responsive layouts for all devices.</li>
              <li>Built XHTML, HTML, CSS, JavaScript websites.</li>
              <li>Ensured SEO & multi-browser compatibility.</li>
              <li>Maintained brand consistency across platforms.</li>
            </ul>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 border-l-4 border-purple-500 relative">
            <span className="absolute -left-12 top-5 bg-purple-600 text-white px-3 py-1 rounded-lg text-xs">
              DEC 2019 - JAN 2022
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 pt-6">
              Web Designer
            </h3>
            <p className="text-gray-600 font-medium mb-3">
              Netking Web Services Pvt. Ltd, Noida
            </p>

            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Designed custom websites for diverse clients.</li>
              <li>Converted PSD to HTML.</li>
              <li>Debugged and fixed responsive issues.</li>
              <li>Created websites with custom CSS and animations.</li>
              <li>Built layouts manually when PSD not approved.</li>
            </ul>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 border-l-4 border-orange-500 relative">
            <span className="absolute -left-12 top-5 bg-orange-600 text-white px-3 py-1 rounded-lg text-xs">
              FREELANCE
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 pt-6">
              Freelance Web Designer
            </h3>
            <p className="text-gray-600 font-medium mb-3">
              Switch2US
            </p>

            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Created XHTML, HTML, CSS, JavaScript websites.</li>
              <li>SEO-friendly & multi-browser compatible builds.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
