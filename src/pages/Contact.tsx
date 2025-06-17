import React, { useState } from 'react';
import { Mail, MapPin, PhoneCall, Send } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://sheetdb.io/api/v1/klc17oowqqhum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [formData]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business with AI? Let's start a conversation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background rounded-xl p-8 shadow-sm border border-border/50">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors bg-background"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors bg-background"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors bg-background"
                    placeholder="Acme Inc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors bg-background resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col">
              <div className="bg-background rounded-xl p-8 shadow-sm border border-border/50 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:info@brikinc.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@brikinc.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">
                        Toronto, Ontario, Canada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brix-500 text-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Let's Build Together</h2>
                <p className="mb-6">
                  Looking for a team of experienced engineers to bring your vision to life? 
                  We're ready to help you build innovative AI solutions that drive real business value.
                </p>
                <p className="text-sm text-white/80">
                  Our team will respond to your inquiry within 24-48 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-2">What types of projects do you typically work on?</h3>
                <p className="text-muted-foreground">
                  We specialize in AI engineering, full-stack development, and data systems. Our projects range from AI-powered applications and LLM integrations to scalable data pipelines and enterprise systems.
                </p>
              </div>
              
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-2">How does your project process work?</h3>
                <p className="text-muted-foreground">
                  We follow a structured approach: discovery to understand your needs, planning the solution architecture, implementation with regular reviews, and deployment with ongoing support.
                </p>
              </div>
              
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-2">Do you work with startups or just enterprise clients?</h3>
                <p className="text-muted-foreground">
                  We work with clients of all sizes, from startups to enterprise organizations. Our solutions are always tailored to meet your specific needs and budget.
                </p>
              </div>
              
              <div className="p-6 bg-background rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-2">What technologies do you specialize in?</h3>
                <p className="text-muted-foreground">
                  Our team has expertise in a wide range of technologies including AWS, Azure, Python, React, Node.js, TensorFlow, PyTorch, and various database systems. We select the best technologies for each project's specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
