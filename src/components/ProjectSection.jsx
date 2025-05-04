import React from 'react';

const projects = [
  {
    title: 'Sort Flow',
    description: 'This is a brief description of Project One.',
    link: 'https://sortflow-beta.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    image: '/sorting.jpeg'
  },
  {
    title: 'Song Zone',
    description: 'This is a brief description of Project Two.',
    link: 'https://song-zone-one.vercel.app',
    tags: ['JavaScript', 'Firebase', 'CSS'],
    image: '/song.jpeg'
  },
  {
    title: 'Tik-Tac-Toe Game',
    description: 'This is a brief description of Project Three.',
    link: 'https://github.com/AayushBarik07/Tic-Tac-Toe-Game',
    tags: ['TypeScript', 'MongoDB', 'Express'],
    image: '/tic_tac_toe.jpeg'
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800" id="projects">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Explore some of my recent work and personal projects. Each project represents unique challenges and solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-zinc-700 hover:border-purple-500/30"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl text-white font-bold mb-3 group-hover:text-indigo-400">{project.title}</h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags && project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-medium bg-zinc-700 text-zinc-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Link Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button (Optional) */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/AayushBarik07" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <span className='text-white'>View All Projects</span>
            <svg className="w-5 h-5 ml-2 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;