import React, { useState, useEffect } from 'react';
import { Mail, MapPin, PhoneCall, Send } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import data from '../data.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Typing animation state
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState(0);
  const fullText = "Ready to transform your business with AI? Let's start a conversation.";
  const altText = "Let's build brick by brick...";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (phase === 0) {
      // Typing out the fullText
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 5000 / fullText.length);
      } else {
        // Wait, then start deleting 'Let's start a conversation.'
        timeout = setTimeout(() => setPhase(1), 500);
      }
    } else if (phase === 1) {
      // Delete 'Let's start a conversation.'
      const deleteFrom = fullText.indexOf("Let's start a conversation.");
      if (displayedText.length > deleteFrom) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 3000 / (fullText.length - deleteFrom));
      } else {
        // Start typing altText
        timeout = setTimeout(() => setPhase(2), 300);
      }
    } else if (phase === 2) {
      // Type altText
      if (displayedText.length < fullText.indexOf("Let's start a conversation.") + altText.length) {
        const prefix = fullText.slice(0, fullText.indexOf("Let's start a conversation."));
        const next = altText.slice(0, displayedText.length - prefix.length + 1);
        timeout = setTimeout(() => {
          setDisplayedText(prefix + next);
        }, 3000 / altText.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, phase]);

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
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          message: formData.message,
          timestamp: new Date().toISOString()
        }),
      });

      const responseData = await response.json();
      console.log('API Response:', responseData);

      if (!response.ok) {
        throw new Error(`API Error: ${responseData.error || response.statusText}`);
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
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = data.contactInfo;
  const faq = data.faq;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground min-h-[2.5em]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
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
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faq.map((item, idx) => (
                <div key={idx} className="p-6 bg-background rounded-xl border border-border/50">
                  <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
