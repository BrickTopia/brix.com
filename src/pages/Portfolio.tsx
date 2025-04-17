import React from 'react';
import { ArrowUpRight, ChevronRight, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const featuredProjects = [
    {
      title: "Pebbles Capstone Project",
      description: "An innovative educational platform built for interactive learning and collaborative research.",
      image: "pebbles",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      link: "https://pebbles-capstone.netlify.app/"
    },
    {
      title: "Celiac App",
      description: "Innovative application designed to support users with gluten intolerance by integrating advanced OCR and data management for real-time ingredient verification and dietary management.",
      image: "celiac",
      technologies: ["React Native", "Python", "TensorFlow", "OCR API"],
      link: ""
    },
    {
      title: "FinSimpl",
      description: "Financial platform connecting contractors and clients with tailored financing options through ML-powered matching algorithms.",
      image: "finsimpl",
      technologies: ["React", "Node.js", "AWS", "ML Models"],
      link: "https://www.finsimpl.com/"
    },
    {
      title: "Budlight Canada",
      description: "Comprehensive redevelopment of the Bud Light Canada website with modern web technologies and responsive design.",
      image: "budlight",
      technologies: ["React", "Next.js", "Contentful", "Vercel"],
      link: "https://www.budlight.ca/en/age-gate"
    }
  ];

  const clientProjects = [
    {
      client: "Microsoft",
      title: "Bing Amenities Enhancement",
      description: "Improved coverage for +6 million new businesses with a 55% feature coverage improvement. Enhanced quality by 30% using LLMs and reduced user-reported bugs by 80%.",
      technologies: ["C#", "Python", "ML", "LLM"]
    },
    {
      client: "Microsoft",
      title: "Bing Content Extraction Pipeline",
      description: "Engineered automated pipeline for discovering new domains for Bing, onboarding +500 new providers and enriching data for +2.7B businesses.",
      technologies: ["Azure Data Factory", "SQL", "C#"]
    },
    {
      client: "Amazon",
      title: "Personalized Recommender System",
      description: "Delivered a pioneering hyper-personalized recommender system, live since 2020, managing the full lifecycle from dataset creation to deployment and UI integration.",
      technologies: ["ML", "AWS", "Python", "React"]
    },
    {
      client: "AWS",
      title: "Identity Services Data Migration",
      description: "Migrated millions of customer data to Universal Identity Store while ensuring synchronization between data stores, implementing highly scalable distributed systems.",
      technologies: ["DynamoDB", "ElasticSearch", "Java", "AWS"]
    },
    {
      client: "Meta",
      title: "Advertising Transaction Pipeline",
      description: "Led the rapid three-week rebuild of Meta's advertising transaction pipeline, managing approximately $2-3 billion in monthly transactions and ensuring regulatory compliance.",
      technologies: ["Python", "React", "GraphQL", "Data Engineering"]
    },
    {
      client: "Wealthsimple",
      title: "Trading Pipeline Optimization",
      description: "Engineered numerous cost-effective, high-throughput pipelines reliably handling 100,000+ daily trades with improved efficiency and reliability.",
      technologies: ["Go", "AWS", "Kafka", "PostgreSQL"]
    }
  ];

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
                  <div className="aspect-video bg-gradient-to-br from-brix-600 to-brix-800 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
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
      
      {/* Client Projects */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Enterprise Solutions</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {clientProjects.map((project, index) => (
              <div key={index} className="border border-border rounded-xl p-6 hover:bg-secondary/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {project.client}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                      {tech}
                    </span>
                  ))}
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
