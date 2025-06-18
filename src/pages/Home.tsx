import React from 'react';
import { ArrowRight, Code, Database, Brain, BarChart, Server, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/theme/ThemeProvider';
import data from '../data.json';

const Home = () => {
  const iconMap = {
    Code: <Code className="h-10 w-10 text-brix-500" />,
    Brain: <Brain className="h-10 w-10 text-brix-500" />,
    BarChart: <BarChart className="h-10 w-10 text-brix-500" />,
    Server: <Server className="h-10 w-10 text-brix-500" />,
    Database: <Database className="h-10 w-10 text-brix-500" />,
    Smartphone: <Smartphone className="h-10 w-10 text-brix-500" />,
  };
  const services = data.services;
  const clients = data.clients;
  const featuredProjects = data.featuredProjects.slice(0, 3);

  const { theme } = useTheme();
  let effectiveTheme = theme;
  if (theme === 'system') {
    effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Engineering <span className="gradient-text">Intelligence</span> Into Your Business
              </h1>
              <p className="text-xl text-muted-foreground">
                We build production-grade AI solutions that drive real business outcomes. From LLMs to scalable data systems, we deliver what matters.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/contact">
                  <button className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Get Started
                  </button>
                </Link>
                <Link to="/portfolio">
                  <button className="w-full sm:w-auto px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors flex items-center justify-center">
                    View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
              
              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">Engineering expertise from:</p>
                <div className="flex flex-wrap gap-6 items-center">
                  {clients.map((client) => (
                    <img
                      key={client.name}
                      src={client.logo}
                      alt={client.name}
                      className="h-10 w-auto object-contain"
                      title={client.name}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center min-h-[320px]">
              <picture>
                <source srcSet="/brix.png" media="(max-width: 640px)" />
                <img
                  src={effectiveTheme === 'dark' ? '/brix_landscape_white.png' : '/logo.png'}
                  alt="Brix Logo"
                  className="mx-auto w-full h-auto drop-shadow-lg"
                  style={{
                    display: 'block',
                    maxWidth: window.innerWidth <= 640 ? '90vw' : '625px',
                    width: window.innerWidth <= 640 ? '100%' : '112.5%',
                  }}
                />
              </picture>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full bg-brix-500/5 animate-pulse-slow"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-brix-600/5 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expertise</h2>
            <p className="text-lg text-muted-foreground">
              We combine cutting-edge technology with deep domain expertise to deliver solutions that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50">
                <div className="mb-6">{iconMap[service.icon]}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Explore All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Real-world impact through innovative technical solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group rounded-xl overflow-hidden border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors">
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
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary flex items-center font-medium">
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brix-800 to-brix-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business with AI?</h2>
            <p className="text-xl mb-8 text-white/80">
              Let's discuss how our engineering expertise can help you achieve your goals.
            </p>
            <Link to="/contact">
              <button className="px-8 py-3 bg-white text-brix-800 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
