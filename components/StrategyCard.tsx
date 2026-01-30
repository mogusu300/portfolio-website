'use client';

import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface StrategyCardProps {
  link: string;
  title: string;
  note: string;
}

export default function StrategyCard({ link, title, note }: StrategyCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Allow time for component to mount before loading iframe
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`grid gap-8 md:gap-12 pb-8 md:pb-12 transition-all duration-700 ${
        isVisible ? 'fade-in-up' : 'opacity-0'
      } ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3 lg:grid-cols-5'}`}
    >
      {/* Video Container - Left Side with glass effect */}
      <div
        className={`${
          isMobile ? 'col-span-1' : 'md:col-span-2 lg:col-span-3'
        } flex items-center justify-center overflow-hidden rounded-lg glass-effect hover-lift group relative`}
      >
        {isLoaded && (
          <div className="relative w-full">
            <iframe
              src={`${link.split('?')[0]}embed/?utm_source=ig_web_button_share_sheet&igsh=ZDcxODczMDI0`}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
              className="aspect-[9/16] w-full"
              style={{
                filter: 'contrast(1.05) saturate(1.1)',
              }}
            />
            {/* Overlay to hide Instagram UI */}
            <style>{`
              iframe {
                pointer-events: all;
              }
            `}</style>
          </div>
        )}
      </div>

      {/* Strategic Insight - Right Side */}
      <div
        className={`${
          isMobile ? 'col-span-1' : 'md:col-span-1 lg:col-span-2'
        } flex flex-col justify-center space-y-6 py-8 md:py-0 px-4 md:px-0`}
      >
        <div className="space-y-4 group">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight text-foreground transition-all duration-300 group-hover:text-accent">
            {title}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {note}
          </p>
        </div>

        {/* External Link Button */}
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-all duration-300 text-sm md:text-base font-medium uppercase tracking-wide group/link hover:gap-3"
          >
            View on Instagram
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
