import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="What I've Built" className="bg-slate-900/30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
          >
            {/* Image Overlay */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/0 transition-colors z-10"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-sm text-purple-400 text-xs font-bold rounded-full border border-purple-500/30">
                  {project.type}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-800 mt-auto">
                <a href="#" className="flex items-center text-sm text-slate-400 hover:text-white transition-colors">
                  <Github className="h-4 w-4 mr-2" /> Code
                </a>
                <a href="#" className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors ml-auto">
                  Live Demo <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;