import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="bg-[#0f172a] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          Educational <span className="text-teal-400">Background</span>
        </h2>

        <div className="bg-[#1e293b] rounded-lg shadow-lg p-6 mb-6 text-left">
          <h3 className="text-2xl font-semibold text-teal-300 mb-2">BBA (Hons) in Management</h3>
          <p className="text-gray-300 mb-1">Bachelor of Business Administration</p>
          <p className="text-gray-400">Major: Management</p>
          <p className="text-gray-400">Institution: Govt. Collage of Commerce, Chattogram</p>
          <p className="text-gray-400">Status: Currently Studying</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
