
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Brik Inc</h3>
            <p className="text-muted-foreground max-w-md">
              An AI engineering team with expertise in full-stack development, LLMs, 
              and scalable data systems delivering production-grade solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="mailto:info@brikinc.com" aria-label="Email" className="text-foreground/70 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/brikinc" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground/70 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/brikinc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Toronto, Canada</li>
              <li><a href="mailto:info@brikinc.com" className="text-muted-foreground hover:text-primary transition-colors">info@brikinc.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Brik Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
