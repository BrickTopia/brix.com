import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sam Weninger",
      role: "Backend & Big Data Engineer",
      bio: "Sam is an experienced engineer with expertise in backend systems, big data processing, and AI integration. Previously at Microsoft, Huawei, and Holland Bloorview, Sam has worked on production-scale data pipelines handling petabytes of data for Bing.",
      expertise: ["Backend Development", "Data Engineering", "LLMs", "Cloud Architecture"],
      experience: ["Microsoft (2022–2024)", "Huawei (2020-2021)", "Holland Bloorview"],
      achievements: [
        "Enhanced Bing Amenities quality by +30% leveraging LLMs, benefiting +14M businesses",
        "Implemented language backfill logic for +2 Billion URLs indexed by Bing",
        "Engineered automated pipeline for discovering new domains for Bing"
      ],
      email: "sweninger99@gmail.com",
      linkedin: "https://linkedin.com/in/samuel-weninger",
      github: "https://github.com/samweninger",
      image: "sam"
    },
    {
      name: "Nish Patel",
      role: "Data & Cloud Engineer",
      bio: "Nish is specialized in cloud infrastructure and data management systems. With experience at AWS, Genesys, and Hydro One, Nish has worked on large-scale data systems and identity services that serve millions of customers.",
      expertise: ["Cloud Computing", "Distributed Systems", "Database Design", "Backend Development"],
      experience: ["AWS", "Skip", "Genesys", "Hydro One"],
      achievements: [
        "Implemented highly scalable distributed systems for AWS Identity Centre",
        "Worked on multi-region replication and encryption library at AWS",
        "Improved database design and querying efficiency at Hydro One"
      ],
      email: "nishbpatel@hotmail.com",
      linkedin: "https://linkedin.com/in/nish-patel",
      github: "https://github.com/nishpatel",
      image: "nish"
    },
    {
      name: "Krishna Solanki",
      role: "ML & Full Stack Engineer",
      bio: "Krishna specializes in machine learning, AI, and full-stack development. With experience at Meta, Amazon, and Wealthsimple, Krishna has delivered recommender systems, ML infrastructure, and high-throughput data pipelines.",
      expertise: ["Machine Learning", "AI Systems", "Full Stack Development", "Data Engineering"],
      experience: ["SaltXC", "Meta", "Amazon", "Wealthsimple"],
      achievements: [
        "Developed a hyper-personalized recommender system for Amazon, live since 2020",
        "Led 3-week rebuild of Meta's advertising transaction pipeline ($2-3B monthly)",
        "Built ML infrastructure for FinSimpl using AWS"
      ],
      email: "ksolo9000@gmail.com",
      linkedin: "https://linkedin.com/in/krishna-solanki",
      github: "https://github.com/krishnasolanki",
      image: "krishna"
    }
  ];

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
                  <div className="md:col-span-1 bg-gradient-to-br from-brix-600 to-brix-800 p-8 text-white flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-white/80 font-medium">{member.role}</p>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-2">Experience</h4>
                        <ul className="space-y-1">
                          {member.experience.map((exp, i) => (
                            <li key={i} className="text-white/80">{exp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 mt-8">
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
                  
                  <div className="md:col-span-2 p-8">
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
            <div className="bg-background p-8 rounded-xl border border-border/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Technical Excellence</h3>
              <p className="text-muted-foreground">
                We hold ourselves to the highest standards of engineering, constantly pushing the boundaries of what's possible.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-xl border border-border/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Pragmatic Innovation</h3>
              <p className="text-muted-foreground">
                We balance cutting-edge technology with practical solutions that deliver real business value.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-xl border border-border/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Client Partnership</h3>
              <p className="text-muted-foreground">
                We work closely with our clients, understanding their challenges and goals to deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
