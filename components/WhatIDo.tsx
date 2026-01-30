'use client';

import { useState, useEffect } from 'react';
import { Heart, BookOpen, Lightbulb, Zap } from 'lucide-react';

interface Principle {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Human-Centered Strategy',
    description: 'Designing narratives that treat people as thinking, feeling beings—not consumers or audiences. Impact emerges from meaning, not noise.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Cultural Intelligence',
    description: 'Understanding how media shapes identity, stories shape values, and technology shapes behavior. Strategy without humanity is short-lived.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Narrative Infrastructure',
    description: 'Building strategic story systems that strengthen institutional relevance, market authority, and long-term commercial value across cultures.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Conscious Innovation',
    description: 'Ensuring technology and platforms are intelligible, rooted, and respectful to the communities they serve—not extractive or imported.',
  },
];

export default function WhatIDo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden pattern-diagonal">
      <div className="absolute inset-0 pattern-circles opacity-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Headline */}
        <div className={`mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
            <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-semibold">What I Do</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
            At the Intersection of Strategy, Storytelling & Culture
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            I design human-centered narratives, campaigns, and platforms that help institutions, brands, and communities communicate with clarity, conscience, and long-term relevance. My work spans mental health, conservation, tech innovation, youth engagement, corporate strategy, and public-facing communication—always anchored in one belief:
          </p>
          <p className="text-xl md:text-2xl font-serif font-semibold text-foreground mt-6">
            <span className="text-accent">Impact is not created by noise.</span> It is created by meaning.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`glass-effect rounded-lg p-6 hover-lift group transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="inline-block p-3 glass-effect rounded-lg mb-4 text-accent group-hover:bg-accent/20 transition-all duration-300">
                {principle.icon}
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* The Organization */}
        <div className={`glass-effect rounded-lg p-8 md:p-12 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
          style={{ transitionDelay: '500ms' }}>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
              <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-semibold">MAGNERA Collective</p>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Co-Founder of MAGNERA: Human-Centered Impact Studio
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              MAGNERA is a strategic platform focused on reshaping how organizations engage people—not as consumers or audiences, but as thinking, feeling human beings embedded in culture.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">The founding principle:</span> Systems do not change until stories change—and stories do not change until people feel seen, understood, and respected within them. MAGNERA bridges the gap between strategy and humanity, between technology and culture, between power and responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
