import React from 'react';
import { Code, Database, Brain, BarChart, Server, Smartphone, Shield, Globe, Clock } from 'lucide-react';
import data from '../data.json';

const Services = () => {
  const iconMap = {
    Brain: <Brain className="h-10 w-10 text-brix-500" />,
    Code: <Code className="h-10 w-10 text-brix-500" />,
    Database: <Database className="h-10 w-10 text-brix-500" />,
  };
  const services = data.services;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive engineering solutions designed to transform your business through AI and advanced technology.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-border/50">
                <div className="mb-6">{iconMap[service.icon]}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {service.details && service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-brix-500 mr-2">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              We follow a structured approach to deliver high-quality solutions that align with your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brix-100 dark:bg-brix-900/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brix-600 dark:text-brix-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-muted-foreground">We analyze your requirements and business context to understand your unique challenges.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brix-100 dark:bg-brix-900/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brix-600 dark:text-brix-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-muted-foreground">We design a comprehensive solution architecture and development roadmap.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brix-100 dark:bg-brix-900/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brix-600 dark:text-brix-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-muted-foreground">Our engineering team builds your solution with regular reviews and iterations.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brix-100 dark:bg-brix-900/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brix-600 dark:text-brix-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deployment</h3>
              <p className="text-muted-foreground">We deploy to production with thorough testing and provide ongoing support and optimization.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
