import React from "react";

const Education = () => {
  return (
    <section className="w-full py-16 bg-[#0E0C21]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center px-6">

        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            Education 
          </h2>

         
          <div className="space-y-8">

           
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-500 hover:-translate-x-2
                       transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900">
                Netaji Subhash Engineering College, Kolkata
              </h3>
              <p className="text-gray-700 font-medium">B-Tech, Mechanical Engineering</p>
              <p className="text-gray-600 text-sm">DGPA: 8.38</p>
            </div>

           
            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-green-500 hover:-translate-x-2
                       transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900">
                R.S College, Tarapur
              </h3>
              <p className="text-gray-700 font-medium">12th, Science</p>
              <p className="text-gray-600 text-sm">Percentage: 73.2%</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-purple-500 hover:-translate-x-2
                       transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900">
                Adarsh High School, Tarapur
              </h3>
              <p className="text-gray-700 font-medium">10th</p>
              <p className="text-gray-600 text-sm">Percentage: 78.6%</p>
            </div>

          </div>
        </div>
         
        <div className="w-full md:col-span-2">
          <img
            src="/images/education.webp"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
