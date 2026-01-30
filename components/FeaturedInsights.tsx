'use client';

import React from "react"

import { useState, useEffect } from 'react';
import { ArrowRight, Zap, BarChart3, Network } from 'lucide-react';

interface Insight {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  impact: string;
}

const insights: Insight[] = [
  {
    id: 1,
    icon: <Zap className="w-6 h-6" />,
    title: 'Institutional Narrative Frameworks',
    description: 'Building coherent brand stories that align organizational identity with stakeholder expectations.',
    category: 'Strategy',
    impact: 'Increases institutional trust by 45%',
  },
  {
    id: 2,
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Market Positioning Systems',
    description: 'Developing strategic positioning that differentiates organizations in competitive landscapes.',
    category: 'Positioning',
    impact: 'Drives market share growth by 30%',
  },
  {
    id: 3,
    icon: <Network className="w-6 h-6" />,
    title: 'Stakeholder Alignment Architecture',
    description: 'Creating frameworks that unite diverse stakeholder groups around shared strategic objectives.',
    category: 'Engagement',
    impact: 'Improves stakeholder satisfaction by 60%',
  },
];

export default function FeaturedInsights() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background via-primary to-background relative overflow-hidden pattern-hexagon">
      {/* Background animation */}
      <div className="absolute top-40 right-20 w-80 h-80 glass-effect-light rounded-full floating-animation opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute -bottom-20 left-10 w-96 h-96 glass-effect-light rounded-full floating-animation opacity-15" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 pattern-lines opacity-4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
            <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-semibold">Strategic Approach</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Featured Strategic Insights
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Core methodologies that drive transformative outcomes for institutions and their stakeholders.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={insight.id}
              className={`glass-effect rounded-lg p-8 hover-lift group transition-all duration-700 ${
                isVisible ? 'fade-in-up' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Icon */}
              <div className="inline-block p-3 glass-effect rounded-lg mb-4 text-accent group-hover:bg-accent/20 transition-all duration-300">
                {insight.icon}
              </div>

              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-4 ml-3">
                <p className="text-xs font-semibold text-accent uppercase tracking-wide">{insight.category}</p>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                {insight.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                {insight.description}
              </p>

              {/* Impact */}
              <div className="pt-6 border-t border-muted">
                <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Impact</p>
                <p className="text-sm font-semibold text-foreground">{insight.impact}</p>
              </div>

              {/* Arrow Icon */}
              <div className="mt-6 inline-block p-2 glass-effect rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
