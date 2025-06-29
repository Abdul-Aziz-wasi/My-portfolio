import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaNodeJs,  FaGithub
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress,  SiFigma, SiFirebase
} from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'CSS3' },
  { icon: <FaJsSquare />, label: 'JavaScript' },
  { icon: <FaReact />, label: 'React.js' },
  { icon: <SiTailwindcss />, label: 'Tailwind' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <SiExpress />, label: 'Express.js' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <SiFirebase />, label: 'Firebase' },
  { icon: <FaGithub />, label: 'GitHub' },
  { icon: <SiFigma />, label: 'Figma' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#0f172a] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-teal-400">Skills</span>
        </h2>

        {/* Scrollable Card Container */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="inline-flex gap-6 animate-scroll px-2">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-[#1e293b] text-white rounded-xl p-6 min-w-[120px] h-[130px] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl text-teal-400 mb-2">
                  {skill.icon}
                </div>
                <p className="text-sm font-medium">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
