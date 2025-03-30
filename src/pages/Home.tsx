
import React from 'react';
import { ArrowRight, Code, Database, Brain, BarChart, Server, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-brik-500" />,
      title: "Full Stack Development",
      description: "End-to-end web applications with intuitive frontend design and empathetic user interfaces."
    },
    {
      icon: <Brain className="h-10 w-10 text-brik-500" />,
      title: "AI & LLM Integration",
      description: "AI-powered applications leveraging advanced language models for smarter interactions."
    },
    {
      icon: <BarChart className="h-10 w-10 text-brik-500" />,
      title: "Machine Learning",
      description: "Building, deploying, and scaling ML models for predictive analytics and automation."
    },
    {
      icon: <Server className="h-10 w-10 text-brik-500" />,
      title: "APIs & Integrations",
      description: "Efficient, reliable APIs for seamless system communication and third-party integrations."
    },
    {
      icon: <Database className="h-10 w-10 text-brik-500" />,
      title: "Data Flow Services",
      description: "Scalable, high-performance data pipelines and streaming solutions for efficient data management."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-brik-500" />,
      title: "OCR & Computer Vision",
      description: "Advanced image and text processing using optical character recognition and computer vision."
    },
  ];

  const clients = [
    "Amazon", "Meta", "Microsoft", "AWS"
  ];

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
                <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders:</p>
                <div className="flex flex-wrap gap-6 items-center">
                  {clients.map((client) => (
                    <span key={client} className="text-foreground/80 font-medium">{client}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brik-400/20 to-brik-800/40 p-1">
                <div className="h-full w-full rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="text-4xl font-bold p-8 text-center">
                    <span className="gradient-text">BRIK</span>
                    <div className="text-xl font-normal mt-4 text-muted-foreground">
                      Building the future with AI
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full bg-brik-500/5 animate-pulse-slow"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-brik-600/5 animate-pulse-slow"></div>
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
                <div className="mb-6">{service.icon}</div>
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
            {/* Project Cards */}
            <div className="group rounded-xl overflow-hidden border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <div className="aspect-video bg-gradient-to-r from-brik-800/80 to-brik-600/80 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">Pebbles Capstone</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pebbles Capstone Project</h3>
                <p className="text-muted-foreground mb-4">
                  An innovative educational platform built for interactive learning and collaborative research.
                </p>
                <a href="https://pebbles-capstone.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center font-medium">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="group rounded-xl overflow-hidden border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <div className="aspect-video bg-gradient-to-r from-brik-800/80 to-brik-600/80 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">Celiac App</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Celiac App</h3>
                <p className="text-muted-foreground mb-4">
                  OCR-powered application for real-time ingredient verification supporting users with gluten intolerance.
                </p>
                <Link to="/portfolio" className="text-primary flex items-center font-medium">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="group rounded-xl overflow-hidden border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <div className="aspect-video bg-gradient-to-r from-brik-800/80 to-brik-600/80 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">FinSimpl</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">FinSimpl</h3>
                <p className="text-muted-foreground mb-4">
                  Financial platform connecting contractors and clients with tailored financing options.
                </p>
                <a href="https://www.finsimpl.com/" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center font-medium">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
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
      <section className="section-padding bg-gradient-to-r from-brik-800 to-brik-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business with AI?</h2>
            <p className="text-xl mb-8 text-white/80">
              Let's discuss how our engineering expertise can help you achieve your goals.
            </p>
            <Link to="/contact">
              <button className="px-8 py-3 bg-white text-brik-800 rounded-lg font-medium hover:bg-white/90 transition-colors">
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
