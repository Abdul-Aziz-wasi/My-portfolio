import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4" id="about">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-teal-400">Me</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          I'm a dedicated <span className="text-teal-400 font-medium">Frontend Web Developer</span> from <span className="text-teal-400 font-medium">Bangladesh</span> with a passion for building user-friendly, performance-driven applications. I specialize in 
         <span className="text-teal-300"> JavaScript</span>, <span className="text-teal-300"> React</span>, <span className="text-teal-300">Node.js</span>, and <span className="text-teal-300">MongoDB</span>, and I love turning ideas into real-world solutions through clean, scalable code.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
        
          My programming journey began with simple curiosity—tinkering with HTML pages and slowly diving into the world of JavaScript. As I progressed, I discovered a deep enthusiasm for solving problems and creating intuitive user experiences. That passion led me to master technologies like <span className="text-teal-300">React</span>, <span className="text-teal-300">Node.js</span>, <span className="text-teal-300">MongoDB</span>, and <span className="text-teal-300">Express.js</span>.
       
          <br /><br />
          Outside of coding, I enjoy playing football, sketching, and sometimes just getting lost in a good book.
         
        </p>

      </div>
    </section>
  );
};

export default AboutMe;
