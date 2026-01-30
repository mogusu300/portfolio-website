'use client';

import { useState, useEffect } from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-primary relative overflow-hidden pattern-crosshatch">
      {/* Pattern layers */}
      <div className="absolute inset-0 pattern-dots opacity-3 pointer-events-none" />
      {/* Animated background */}
      <div className="absolute top-10 right-10 w-96 h-96 glass-effect-light rounded-full floating-animation opacity-25" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 glass-effect-light rounded-full floating-animation opacity-20" style={{ animationDelay: '4s' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main CTA Content */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Ready to Transform Your Narrative?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's collaborate on strategic initiatives that strengthen institutional authority and drive sustainable commercial value.
          </p>
        </div>

        {/* Contact Methods */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {/* Email CTA */}
          <a
            href="mailto:thompsonnkhata2@gmail.com"
            className="glass-effect rounded-lg p-8 hover-lift group transition-all duration-300"
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="p-3 glass-effect rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg text-foreground mb-2">Direct Email</h3>
                <p className="text-sm text-muted-foreground mb-4">thompsonnkhata2@gmail.com</p>
              </div>
              <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </a>

          {/* LinkedIn CTA */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect rounded-lg p-8 hover-lift group transition-all duration-300"
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="p-3 glass-effect rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg text-foreground mb-2">Connect on LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-4">@ThompsonNkhata</p>
              </div>
              <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                Connect <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>

        {/* Trust Statement */}
        <div className={`glass-effect rounded-lg p-8 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Every engagement is confidential, tailored to your institutional context, and designed to deliver measurable strategic impact.
          </p>
        </div>
      </div>
    </section>
  );
}
