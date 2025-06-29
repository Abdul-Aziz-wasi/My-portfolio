import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.slug === slug);
        setProject(found);
      });
  }, [slug]);

  if (!project) return <div className="text-white p-10">Project not found.</div>;

  return (
    <div className="bg-[#0f172a] text-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full h-64 object-contain rounded mb-6" />
        
        <p><strong>Tech Stack:</strong> {project.tech}</p>
        <p className="mt-4"><strong>Description:</strong> {project.description}</p>
        <p className="mt-4"><strong>Challenges:</strong> {project.challenges}</p>
        <p className="mt-4"><strong>Future Plans:</strong> {project.future}</p>

        <div className="flex gap-4 mt-6">
          <a href={project.live} target="_blank" className="bg-teal-500 px-4 py-2 rounded">Live Site</a>
          <a href={project.github} target="_blank" className="bg-gray-700 px-4 py-2 rounded">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
