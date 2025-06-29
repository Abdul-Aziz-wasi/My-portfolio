import React from 'react';
import { Link,  } from 'react-router-dom';


const projects = [
  {
    id: 1,
    title: 'Tree App',
    image: 'https://i.ibb.co/SXwvW7gW/Tree.png',
    live: 'https://teal-yeot-fd4c73.netlify.app/',
    github:'https://github.com/Abdul-Aziz-wasi/Tree-project',
    slug: "tree-app",
    
  },
  {
    id: 2,
    title: 'Virtual BookShelf',
    image: 'https://i.ibb.co/JwXh9r1F/book.png',
    live: 'https://guileless-gumdrop-8ead0b.netlify.app/',
    github:'https://github.com/Abdul-Aziz-wasi/Book-Shelf',
    slug: "bookshelf-app",
    
  },
  {
    id: 3,
    title: 'Job Tracker',
    image: 'https://i.ibb.co/KcHY4MDM/Screenshot.png',
    live: 'https://zesty-salamander-22fe8f.netlify.app/',
    github:'https://github.com/Abdul-Aziz-wasi/Job-Track',
    slug: "job-tracker",
   
  },
];

const ProjectsSection = () => {
    
   
  return (
    <section id="projects" className="bg-[#0f172a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-teal-400">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1e293b] rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-xl flex lg:flex-start font-semibold mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Link
                    to={project.live}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition"
                  >
                    Web Link
                  </Link>
                  <Link
                    to={project.github}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition"
                  >
                    GitHub
                  </Link>
                  <Link
                     to={`/projects/${project.slug}`}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
