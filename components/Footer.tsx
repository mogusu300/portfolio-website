'use client';

import { Linkedin, Mail, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="bg-primary border-t border-muted py-16 md:py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden pattern-hexagon">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-circles opacity-2 pointer-events-none" />
      {/* Animated background elements */}
      <div className="absolute top-0 right-10 w-80 h-80 glass-effect-light rounded-full floating-animation opacity-25" />
      <div className="absolute bottom-10 left-20 w-96 h-96 glass-effect-light rounded-full floating-animation opacity-20" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Message */}
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold max-w-3xl leading-relaxed text-foreground">
            I function not as a content producer, but as a strategic partner.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-muted mb-12 md:mb-16" />

        {/* Social Links & Contact */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {/* Social Links */}
          <div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Connect
            </p>
            <div className="space-y-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 glass-effect rounded-lg px-4 py-2 text-foreground hover:text-accent hover:bg-white/60 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-sm md:text-base">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 glass-effect rounded-lg px-4 py-2 text-foreground hover:text-accent hover:bg-white/60 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-sm md:text-base">Instagram</span>
              </a>
            </div>
          </div>

          {/* Email & Phone Contact */}
          <div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Get In Touch
            </p>
            <div className="space-y-3">
              <a
                href="mailto:thompsonnkhata2@gmail.com"
                className="inline-flex items-center gap-3 glass-effect rounded-lg px-4 py-2 text-foreground hover:text-accent hover:bg-white/60 transition-all duration-300 group block w-full"
              >
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                <span className="text-sm md:text-base">thompsonnkhata2@gmail.com</span>
              </a>
              <a
                href="tel:+260950063436"
                className="inline-flex items-center gap-3 glass-effect rounded-lg px-4 py-2 text-foreground hover:text-accent hover:bg-white/60 transition-all duration-300 group block w-full"
              >
                <span className="text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">📱</span>
                <span className="text-sm md:text-base">+260 950 063 436</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-muted">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Thompson Nkhata. Strategic consulting in narrative systems and institutional positioning.
          </p>
        </div>
      </div>
    </footer>
  );
}
