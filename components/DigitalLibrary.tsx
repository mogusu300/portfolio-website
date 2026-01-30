'use client';

import { useState, useEffect } from 'react';
import StrategyCard from './StrategyCard';

const videos = [
  {
    link: 'https://www.instagram.com/reel/DCW88KkoQOC/?igsh=MTMyOG9tZWl6cW5mZQ==',
    title: 'Livingstone: Economic Positioning',
    note: 'Moving beyond transit hubs: Designing a narrative-led sustainable destination strategy that retains economic value.',
  },
  {
    link: 'https://www.instagram.com/reel/DShjtqjCPck/?igsh=eGtqa2V6cnQ2bzh5',
    title: 'Arcades Mall: The Urban Platform',
    note: 'Shifting the identity of retail real estate from "space for rent" to a strategic hub for innovation and entrepreneurship.',
  },
  {
    link: 'https://www.instagram.com/reel/DSkm7HWDB6x/?igsh=bGlidnpqbW9xZ2k=',
    title: 'Soft Power & Public Trust',
    note: 'How corporate diplomacy and leadership dialogue facilitate alignment between business objectives and community expectations.',
  },
  {
    link: 'https://www.instagram.com/reel/DSrl1x5CKLi/?igsh=aTl4Y2xkdmlkN2J0',
    title: 'Mental Health as Strategy',
    note: 'Advocating for workforce resilience and social trust as critical components of national economic stability.',
  },
  {
    link: 'https://www.instagram.com/reel/DSw4dprCIUW/?igsh=MXFyaDI5M21xNW5heg==',
    title: 'The Youth Economy',
    note: 'Bridging the gap between institutional authority and the aspirational identity of the emerging market.',
  },
  {
    link: 'https://www.instagram.com/reel/DSaSfZciD5Z/?igsh=MWFraGF4dTQyb2Jrcw==',
    title: 'Leadership Dialogue',
    note: 'Strategic conversations on institutional resilience and market positioning in contemporary economic landscapes.',
  },
  {
    link: 'https://www.instagram.com/reel/DH-UjxZI9H2/?igsh=MTcxZTNpY2thdTFreA==',
    title: 'Market Analysis',
    note: 'Deep insights into commercial ecosystems and the narratives that shape investor behavior and stakeholder trust.',
  },
  {
    link: 'https://www.instagram.com/reel/DIO3qoHIPmW/?igsh=MTNiZnF5Y2kyNG0wcA==',
    title: 'Institutional Strategy',
    note: 'Crafting coherent strategic frameworks that align organizational mission with market opportunity and public mandate.',
  },
];

export default function DigitalLibrary() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden pattern-mosaic">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-wave opacity-3 pointer-events-none" />
      {/* Animated background elements */}
      <div className="absolute top-40 right-10 w-80 h-80 glass-effect-light rounded-full floating-animation opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-96 h-96 glass-effect-light rounded-full floating-animation opacity-25" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-foreground">
            Conversations with Trailblazers
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Strategic Insights & Market Narratives
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {videos.map((video, index) => (
            <div key={index} style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
              <StrategyCard {...video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
