import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import data from '../data.json';

const Team = () => {
  const teamMembers = data.teamMembers;
  const values = data.values;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Experienced engineers with a passion for solving complex technical challenges.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Members */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-background rounded-xl shadow-sm overflow-hidden border border-border/50">
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
