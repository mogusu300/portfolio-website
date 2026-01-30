'use client';

import { Briefcase, TrendingUp, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const pillars = [
  {
    icon: Briefcase,
    title: 'Executive Positioning',
    description: 'Aligning leadership vision with public perception.',
  },
  {
    icon: TrendingUp,
    title: 'Economic Diplomacy',
    description: 'Converting cultural relevance into commercial loyalty.',
  },
  {
    icon: Target,
    title: 'Platform Design',
    description: 'Positioning brands as agenda-setters.',
  },
];

export default function StrategicPhilosophy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="philosophy"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-primary relative overflow-hidden pattern-circles"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pattern-stripes opacity-4 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 glass-effect-light rounded-full floating-animation opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-10 w-96 h-96 glass-effect-light rounded-full floating-animation opacity-20" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with border */}
        <div className={`mb-16 md:mb-20 pb-8 md:pb-12 border-b border-muted transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
            Strategic Philosophy
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Storytelling in my practice is not marketing decoration; it is strategic
            infrastructure that shapes investor confidence, tenant attraction, and national
            brand equity.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index} 
                className={`space-y-4 hover-lift group transition-all duration-700 pattern-accent-line pl-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Icon with glass effect */}
                <div className="inline-block p-3 glass-effect rounded-lg glow-effect border-0">
                  <Icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
