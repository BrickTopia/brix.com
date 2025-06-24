import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import data from '../data.json';

const Team = () => {
  const teamMembers = data.teamMembers;
  const values = data.values;
  const [isVisible, setIsVisible] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState(0);
  const [showIndicator, setShowIndicator] = useState(true);
  const [idle, setIdle] = useState(false);
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cycleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Idle timer logic
  useEffect(() => {
    const resetIdle = () => {
      setIdle(false);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => setIdle(true), 4000); // 4 seconds
    };
    // Start timer on mount
    resetIdle();
    // Listen for user activity
    window.addEventListener('click', resetIdle);
    window.addEventListener('scroll', resetIdle);
    window.addEventListener('keydown', resetIdle);
    return () => {
      window.removeEventListener('click', resetIdle);
      window.removeEventListener('scroll', resetIdle);
      window.removeEventListener('keydown', resetIdle);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  // Animation and indicator cycling logic
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 100);
    const timer2 = setTimeout(() => setShowPhotos(true), 800);
    const timer3 = setTimeout(() => setShowContent(true), 1600);
    let fadeTimeout: NodeJS.Timeout;
    // Only cycle indicator if idle
    if (idle) {
      setShowIndicator(true);
      cycleIntervalRef.current = setInterval(() => {
        setShowIndicator(false); // fade out
        fadeTimeout = setTimeout(() => {
          setActiveIndicator(prev => (prev + 1) % teamMembers.length);
          setShowIndicator(true); // fade in after a beat
        }, 300);
      }, 3000);
    } else {
      setShowIndicator(false);
      if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      if (cycleIntervalRef.current) clearInterval(cycleIntervalRef.current);
      clearTimeout(fadeTimeout);
    };
  }, [idle, teamMembers.length]);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Meet Our Team
            </h1>
            <p 
              className={`text-xl text-muted-foreground transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Experienced engineers with a passion for solving complex technical challenges.
            </p>
          </div>
        </div>
      </section>
      
      {/* Animated Team Photos Row - Desktop Only */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 mb-16">
          <div className="flex justify-center space-x-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ease-out cursor-pointer hover:scale-105 ${
                  showPhotos 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 -translate-y-20 scale-75'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => {
                  const element = document.getElementById(`team-member-${index}`);
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'center' 
                    });
                  }
                }}
                tabIndex={0}
                aria-label={`Click for more about ${member.name}`}
              >
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-brix-500/20 shadow-lg">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      onError={e => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-brix-800 text-white text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-background px-4 py-2 rounded-full border border-border shadow-sm">
                  <span className="text-base font-medium text-muted-foreground">
                    {member.name.split(' ')[0]}
                  </span>
                </div>
                {/* Animated click me indicator for only the active member */}
                {idle && activeIndicator === index && (
                  <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-[800ms] ${showIndicator ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                    <span className="text-xs text-brix-400 font-semibold flex items-center gap-1 animate-pulse">
                      Click me <span className="text-brix-400 text-base">↓</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Members */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                id={`team-member-${index}`}
                className={`bg-background rounded-xl shadow-sm overflow-hidden border border-border/50 transition-all duration-1000 ease-out ${
                  showContent 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1 relative group min-h-[320px] flex">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        onError={e => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    {!member.image && (
                      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-brix-800 text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-white/80 font-medium mb-4">{member.role}</p>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Experience</h4>
                        <ul className="space-y-1 text-center">
                          {member.experience.map((exp, i) => (
                            <li key={i} className="text-white/80">{exp}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex space-x-4 mt-2">
                        <a href={`mailto:${member.email}`} aria-label="Email" className="text-white hover:text-white/80 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                        <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-white/80 transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-white/80 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{member.role}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">About</h4>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <span key={i} className="text-sm px-3 py-1 rounded-full bg-brix-100 dark:bg-brix-900/30 text-brix-800 dark:text-brix-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-brix-500 mr-2">•</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The core principles that guide our team and shape our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-background p-8 rounded-xl border border-border/50 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
