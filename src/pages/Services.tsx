import React from 'react';
import { Code, Database, Brain, BarChart, Server, Smartphone, Shield, Globe, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-brix-500" />,
      title: "Full Stack Development",
      description: "End-to-end web applications with intuitive frontend design and empathetic user interfaces tailored to enhance user experience. Our expertise spans React, TypeScript, Node.js and more, allowing us to craft performant and scalable solutions.",
      details: [
        "Modern frontend frameworks (React, Vue.js)",
        "Backend development (Node.js, Python, C#)",
        "Responsive and accessible web design",
        "API development and integration"
      ]
    },
    {
      icon: <Brain className="h-10 w-10 text-brix-500" />,
      title: "AI & LLM Integration",
      description: "AI-powered applications with robust full-stack implementations, leveraging advanced language models for smarter user interactions and functionality. We bridge the gap between cutting-edge AI research and practical business applications.",
      details: [
        "Custom LLM prompt engineering",
        "AI integration with existing systems",
        "Natural language processing solutions",
        "Conversational AI and chatbots"
      ]
    },
    {
      icon: <BarChart className="h-10 w-10 text-brix-500" />,
      title: "Machine Learning",
      description: "Building, deploying, and scaling ML models tailored for various business needs, including predictive analytics and automation. We handle the complete ML lifecycle from data preparation to production deployment.",
      details: [
        "Predictive modeling and analytics",
        "Data labeling and preparation",
        "MLOps and model deployment",
        "Performance monitoring and optimization"
      ]
    },
    {
      icon: <Server className="h-10 w-10 text-brix-500" />,
      title: "APIs & Integrations",
      description: "Designing and implementing efficient, reliable APIs for seamless system communication and third-party integrations. Our API solutions are built with performance, security, and developer experience in mind.",
      details: [
        "RESTful and GraphQL API design",
        "Microservices architecture",
        "Third-party system integration",
        "API documentation and governance"
      ]
    },
    {
      icon: <Database className="h-10 w-10 text-brix-500" />,
      title: "Data Flow Services",
      description: "Developing scalable, high-performance data pipelines and streaming solutions for efficient data management and real-time analytics. We help you turn raw data into actionable business intelligence.",
      details: [
        "ETL/ELT pipeline development",
        "Real-time data streaming",
        "Data warehousing solutions",
        "Big data processing frameworks"
      ]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-brix-500" />,
      title: "OCR & Computer Vision",
      description: "Proficient in optical character recognition (OCR) and computer vision technologies for enhanced image and text processing applications. These solutions automate document processing and enable new visual intelligence capabilities.",
      details: [
        "Document scanning and text extraction",
        "Image classification and object detection",
        "Visual search capabilities",
        "Automated data entry systems"
      ]
    },
    {
      icon: <Globe className="h-10 w-10 text-brix-500" />,
      title: "Cloud Architecture",
      description: "Designing and implementing scalable cloud solutions tailored to your business needs. We leverage the best of AWS, Azure, and Google Cloud to create reliable and cost-effective infrastructures.",
      details: [
        "Cloud migration strategies",
        "Serverless architecture",
        "Multi-cloud deployments",
        "Cloud cost optimization"
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-brix-500" />,
      title: "Security Engineering",
      description: "Implementing robust security measures throughout the software development lifecycle. Our security-first approach ensures your applications and data remain protected against evolving threats.",
      details: [
        "Secure coding practices",
        "Vulnerability assessment",
        "Authentication and authorization systems",
        "Data encryption and protection"
      ]
    },
    {
      icon: <Clock className="h-10 w-10 text-brix-500" />,
      title: "Technical Consulting",
      description: "Strategic technical guidance to help businesses make informed decisions about technology investments and implementations. We provide expert advice based on years of industry experience.",
      details: [
        "Technology stack evaluation",
        "Performance optimization",
        "Technical debt reduction",
        "Architecture review and planning"
      ]
    }
  ];

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
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
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
