'use client';

import React from "react"

import { useState, useEffect } from 'react';
import { Settings, Lightbulb, Users, TrendingUp, Shield, Zap } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Strategic Narrative Development',
    description: 'Crafting coherent organizational narratives that resonate with stakeholders',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Stakeholder Engagement',
    description: 'Building alignment frameworks that unite diverse audience groups',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Market Positioning',
    description: 'Establishing institutional authority and competitive differentiation',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Brand Protection Strategy',
    description: 'Safeguarding institutional reputation through strategic communication',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Organizational Architecture',
    description: 'Designing systems that align internal operations with external positioning',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Crisis Narrative Management',
    description: 'Rapid response frameworks for managing institutional challenges',
  },
];

export default function ServicesOverview() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden pattern-stripes">
      <div className="absolute inset-0 pattern-circles opacity-3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
            <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-semibold">Service Offerings</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Comprehensive Strategic Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions designed to address your institution's unique strategic and narrative challenges
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Card with pattern */}
              <div className="glass-effect rounded-lg p-8 h-full hover-lift group relative overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="inline-block p-4 glass-effect rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Accent line */}
                  <div className="pt-4 inline-block w-1 h-6 bg-accent rounded-full group-hover:h-8 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
