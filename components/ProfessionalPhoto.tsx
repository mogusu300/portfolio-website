'use client';

import { useState, useEffect } from 'react';

export default function ProfessionalPhoto() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden pattern-wave">
      {/* Animated background elements */}
      <div className="absolute top-40 left-10 w-80 h-80 glass-effect-light rounded-full floating-animation opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-20 w-96 h-96 glass-effect-light rounded-full floating-animation opacity-30" style={{ animationDelay: '3s' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-foreground">
            Meet Thompson
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Strategic visionary and institutional architect shaping market narratives and corporate identity.
          </p>
        </div>

        {/* Photo Container */}
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {/* Photo */}
          <div className="hover-lift group relative">
            <div className="glass-effect rounded-xl overflow-hidden p-0">
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg overflow-hidden relative">
                {/* Professional portrait */}
                <img
                  src="/thompson-portrait.jpg"
                  alt="Thompson Nkhata - Strategic Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute inset-0 glass-effect-light rounded-xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Bio Content */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <div className="space-y-6">
              <div className="group">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-accent">
                  Strategic Excellence
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  With over a decade of experience in corporate strategy and institutional development, Thompson brings a unique blend of business acumen and narrative design to every engagement.
                </p>
              </div>

              <div className="group">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-accent">
                  Institutional Authority
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Specializing in positioning organizations as market leaders, Thompson designs comprehensive narrative systems that align corporate identity with stakeholder expectations and market opportunity.
                </p>
              </div>

              <div className="group">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-accent">
                  Digital Diplomacy
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  From boardroom conversations to digital platforms, Thompson facilitates strategic dialogue that builds institutional resilience, market trust, and long-term value creation.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:thompsonnkhata2@gmail.com"
              className="inline-block glass-effect rounded-lg px-8 py-4 text-foreground font-medium uppercase tracking-wide hover-lift glow-effect transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
