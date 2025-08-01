import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import resume from '../../assets/Abdul Aziz web developer resume (1).pdf';
import image from '../../assets/aziz_img.JPG';

const HeroSection = () => {
  const fullText = "Hi, I'm Abdul Aziz";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0f172a] text-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            {displayedText.includes('Abdul Aziz') ? (
              <>
                {displayedText.replace(" Abdul Aziz", "")}
                <br />
                 <span className="text-teal-400">Abdul Aziz</span>
              </>
            ) : (
              displayedText
            )}
            <span className="border-r-2 border-teal-400 animate-pulse ml-1"></span>
          </motion.h1>

          <p className="text-lg text-gray-300 mb-6">
            I'm a passionate{' '}
            <span className="text-teal-400 font-medium">Frontend Web Developer</span>{' '}
            skilled in JavaScript, React, Node.js, and MongoDB. I create clean, efficient, and user-friendly web applications.
          </p>

          {/* Resume Button */}
          <a
            href={resume}
            download
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            📄 Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6 text-2xl">
            <a
              href="https://github.com/Abdul-Aziz-wasi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-aziz-38350a377/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/ma.aziz.79025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt="Hero"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-teal-500 mt-6 md:mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
