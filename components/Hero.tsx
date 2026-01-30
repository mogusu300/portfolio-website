'use client';

import { ArrowDown, Briefcase, TrendingUp, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Briefcase, label: 'Strategic Engagements', value: '50+' },
    { icon: TrendingUp, label: 'Market Growth', value: '2B+' },
    { icon: Users, label: 'Stakeholders Aligned', value: '500+' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden pattern-crosshatch">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-diagonal opacity-3 pointer-events-none" />
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 glass-effect-light rounded-full floating-animation opacity-50" />
      <div className="absolute bottom-40 left-10 w-96 h-96 glass-effect-light rounded-full floating-animation opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 glass-effect-light rounded-full floating-animation opacity-30" style={{ animationDelay: '4s' }} />

      <div className={`max-w-5xl mx-auto text-center space-y-12 relative z-10 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
        {/* Main Headline with accent */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 glass-effect rounded-full mb-4">
            <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-semibold">Strategic Excellence</p>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-foreground">
            Thompson Nkhata
          </h1>
        </div>

        {/* Subheadline */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-medium">
            Corporate & Narrative Strategy Consultant
          </p>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
          <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">
            Institutional Diplomat & Market Architect
          </p>
        </div>

        {/* Tagline */}
        <p className="font-sans text-base md:text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
          Designing narrative systems that strengthen institutional relevance, market authority, and long-term commercial value through strategic positioning.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 hover-lift transition-all duration-300"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 glass-effect rounded-lg">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => {
              const element = document.getElementById('philosophy');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 glass-effect rounded-lg text-accent font-semibold uppercase tracking-wide hover:bg-accent/10 transition-all duration-300 hover-lift"
          >
            Explore Work
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-accent text-background rounded-lg font-semibold uppercase tracking-wide hover:shadow-lg transition-all duration-300 hover-lift"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex justify-center animate-bounce" style={{ animationDuration: '2s' }}>
          <button
            onClick={() => {
              const element = document.getElementById('philosophy');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center w-12 h-12 glass-effect rounded-full hover:bg-accent/20 transition-all duration-300 group"
          >
            <ArrowDown className="w-5 h-5 text-accent group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Decorative accent lines */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-accent/30" />
      <div className="absolute top-1/3 left-0 w-1 h-32 bg-gradient-to-b from-accent/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-1 h-32 bg-gradient-to-b from-accent/30 to-transparent" />
    </section>
  );
}
