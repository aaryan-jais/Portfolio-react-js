import React from "react";


const KnowBackend = () => {
  return (
    <section className="w-full bg-[#0E0D3D] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

       
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Know the <span className="text-blue-400">Backend</span>
        </h2>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

       
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition duration-300 hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-4">
             <i className="fab fa-node-js text-5xl text-green-600 mb-4"></i>
              <h3 className="text-2xl font-semibold text-gray-900">Node.js</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Experienced with building backend services using Node.js.  
              I develop scalable APIs, handle async operations, and work 
              with modules, middleware, authentication, and real-time 
              event-driven applications.
            </p>
          </div>

         
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition duration-300 hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-4">
           <i className="fas fa-server text-5xl text-blue-600 mb-4"></i>

              <h3 className="text-2xl font-semibold text-gray-900">Express.js</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Build RESTful APIs using Express.js.  
              Strong expertise in routing, middleware, controllers, 
              JWT authentication, API security, error handling, 
              file upload systems, and building modular backend applications.
            </p>
          </div>

      
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition duration-300 hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-4">
             <i className="fas fa-database text-5xl text-yellow-600 mb-4"></i>
              <h3 className="text-2xl font-semibold text-gray-900">Mongoose</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Skilled in MongoDB database design using Mongoose ORM.  
              Experienced with schemas, models, validation, queries, 
              population, and building secure & optimized NoSQL databases.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default KnowBackend;
