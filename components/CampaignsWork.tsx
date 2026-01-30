'use client';

import { useState, useEffect } from 'react';
import { Users, Zap, Heart, Globe, TrendingUp, Award } from 'lucide-react';

interface Campaign {
  id: number;
  title: string;
  subtitle: string;
  why: string;
  what: string;
  significance: string;
  icon: React.ReactNode;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    title: 'MEN WHO SEE CLEARLY',
    subtitle: 'Media, Masculinity & Identity',
    why: 'Young men form identities inside media ecosystems that reward performance over reflection. This platform interrupts that cycle.',
    what: 'Creates space for reflection rather than instruction. Equips young men to decode media narratives and reframe masculinity as responsibility, awareness, and emotional intelligence.',
    significance: 'Brands influence masculinity whether they intend to or not. This allows partners to engage youth responsibly while contributing to healthier cultural norms.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'JUST US',
    subtitle: 'A National Mental Health Narrative Platform',
    why: 'Mental health cannot be outsourced to experts alone—it must be held collectively. The change we want does not come from "them." It comes from just us.',
    what: 'A podcast exploring mental health through lived experience. Community conversations, narrative storytelling, and a long-term framework for mental health literacy, empathy, and emotional responsibility.',
    significance: 'Allows brands to participate in mental health conversations without commodifying pain, positioning them as facilitators of care, not performers of concern.',
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'CROSSROADS 5',
    subtitle: 'A Mindscape Run for Collective Strength',
    why: 'Modern culture celebrates finishing first. Crossroads 5 celebrates not finishing alone.',
    what: 'A five-mile mindscape run where participants encounter reflective questions at every mile. When someone is too tired to continue and must walk, the group walks with them.',
    significance: 'A living metaphor for resilience, mental health, teamwork, and inclusion—ideal for brands committed to wellness, community, and human-centered values.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'COMMON THREAD',
    subtitle: 'AfroTech, Culture & Human-Centered Innovation',
    why: 'Africa does not need copy-and-paste technology. It needs technology that understands how African people think, solve problems, and live.',
    what: 'An AfroTech narrative series helping brands and innovators understand cultural intelligence, why technology must speak human language, and how innovation becomes meaningful when locally intelligible.',
    significance: 'Helps tech-driven brands move from imported solutions to rooted innovation, increasing trust, usability, and long-term relevance in African markets.',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: 5,
    title: 'EVERY HUMAN',
    subtitle: 'A Radical Storytelling Campaign',
    why: 'In a world obsessed with categories, metrics, and labels, Every Human centers dignity.',
    what: 'Tells stories without hierarchy—no influencer status, no performative worth—just people, fully human.',
    significance: 'Helps brands shift from transactional marketing to emotional legitimacy, showing alignment with inclusion, equity, and shared humanity.',
    icon: <Award className="w-8 h-8" />,
  },
  {
    id: 6,
    title: 'HUMANS IN NATURE',
    subtitle: 'Conservation Through Belonging',
    why: 'Nature conservation often excludes people emotionally. Humans in Nature restores the relationship.',
    what: 'Tells conservation stories through human connection. Positions people as part of ecosystems, not separate from them. Builds emotional stewardship, not abstract awareness.',
    significance: 'Humanizes sustainability and conservation—making it understandable, relatable, and emotionally resonant for broader audiences.',
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

const additionalFrameworks = [
  'Untold Systems – Stories behind institutions that shape daily life',
  'The Quiet Majority – Elevating unheard voices shaping culture',
  'Narrative Conservation Labs – Protecting identity through storytelling',
  'Corporate Emotional Intelligence Programs – Culture as performance infrastructure',
];

export default function CampaignsWork() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-primary relative overflow-hidden pattern-stripes">
      <div className="absolute inset-0 pattern-circles opacity-3 pointer-events-none" />
      {/* Animated background elements */}
      <div className="absolute top-40 right-20 w-80 h-80 glass-effect-light rounded-full floating-animation opacity-15" style={{ animationDelay: '1s' }} />
      <div className="absolute -bottom-20 left-10 w-96 h-96 glass-effect-light rounded-full floating-animation opacity-10" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
            <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-semibold">Campaigns & Narrative Platforms</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
            Campaigns as Cultural Infrastructure
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            I design campaigns as cultural infrastructure—not momentary activations. Each initiative is built to create meaning, participation, and long-term relevance while remaining measurable, adaptable, and brand-aligned.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {campaigns.map((campaign, index) => (
            <div
              key={campaign.id}
              className={`glass-effect rounded-lg p-8 hover-lift group transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-block p-3 glass-effect rounded-lg mb-4 text-accent group-hover:bg-accent/20 transition-all duration-300">
                {campaign.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                {campaign.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm font-semibold text-accent mb-6 uppercase tracking-wider">
                {campaign.subtitle}
              </p>

              {/* Why Section */}
              <div className="mb-6 pb-6 border-b border-muted/30">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Why it exists</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {campaign.why}
                </p>
              </div>

              {/* What Section */}
              <div className="mb-6 pb-6 border-b border-muted/30">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">What it does</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {campaign.what}
                </p>
              </div>

              {/* Significance */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">Why it matters to brands</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {campaign.significance}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Frameworks */}
        <div className={`glass-effect rounded-lg p-8 md:p-12 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
          style={{ transitionDelay: '700ms' }}>
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Additional Narrative Frameworks (In Development)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalFrameworks.map((framework, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <p className="text-base text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">{framework.split('–')[0].trim()}</span>
                  {' '}– {framework.split('–')[1]?.trim()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
