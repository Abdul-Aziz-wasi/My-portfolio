import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#0f172a] text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          About <span className="text-teal-400">Me</span>
        </motion.h2>

        {/* Description Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 leading-relaxed mb-8"
        >
          I'm a dedicated <span className="text-teal-400 font-medium">Frontend Web Developer</span> from 
          <span className="text-teal-400 font-medium"> Bangladesh</span> with a passion for building user-friendly, performance-driven applications.
          I specialize in 
          <span className="text-teal-300"> JavaScript</span>, 
          <span className="text-teal-300"> React</span>, 
          <span className="text-teal-300"> Node.js</span>, and 
          <span className="text-teal-300"> MongoDB</span>, and I love turning ideas into real-world solutions through clean, scalable code.
        </motion.p>

        {/* Description Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          My programming journey began with simple curiosity—tinkering with HTML pages and slowly diving into the world of JavaScript. 
          As I progressed, I discovered a deep enthusiasm for solving problems and creating intuitive user experiences. That passion led me to master technologies like 
          <span className="text-teal-300"> React</span>, 
          <span className="text-teal-300"> Node.js</span>, 
          <span className="text-teal-300"> MongoDB</span>, and 
          <span className="text-teal-300"> Express.js</span>.
          <br /><br />
          Outside of coding, I enjoy playing football, sketching, and sometimes just getting lost in a good book.
        </motion.p>

      </div>
    </section>
  );
};

export default AboutMe;
