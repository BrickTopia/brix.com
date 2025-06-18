import React from 'react';
import { ArrowUpRight, ChevronRight, ArrowRight } from 'lucide-react';
import data from '../data.json';

const Portfolio = () => {
  const featuredProjects = data.featuredProjects;
  const clientProjects = data.clientProjects;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our work delivering impactful AI and software solutions for industry leaders.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="rounded-xl overflow-hidden border border-border bg-background shadow-sm transition-all hover:shadow-md">
                  <div className="relative aspect-video bg-gradient-to-br from-brix-600 to-brix-800 flex items-center justify-center overflow-hidden group">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                        style={{ aspectRatio: '16/9' }}
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-2xl font-bold text-center px-4 drop-shadow-lg">{project.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-primary font-medium"
                      >
                        Visit Project <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brix-800 to-brix-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build something amazing?</h2>
            <p className="text-xl mb-8 text-white/80">
              Let's discuss your project and explore how we can help you achieve your goals.
            </p>
            <a href="/contact">
              <button className="px-8 py-3 bg-white text-brix-800 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center mx-auto">
                Start Your Project <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
