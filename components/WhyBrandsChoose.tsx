'use client';

import { useState, useEffect } from 'react';
import { Heart, Zap, Lightbulb, CheckCircle2 } from 'lucide-react';

interface Reason {
  icon: React.ReactNode;
  statement: string;
  explanation: string;
}

const reasons: Reason[] = [
  {
    icon: <Heart className="w-6 h-6" />,
    statement: 'Because I do not sell attention.',
    explanation: 'I build trust through meaning, consistency, and cultural intelligence—not borrowed credibility.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    statement: 'Because I do not chase trends.',
    explanation: 'I design narratives that last, positioned to strengthen institutional relevance and long-term commercial value.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    statement: 'Because I understand that culture is not a risk to KPIs.',
    explanation: 'Culture is what protects them. Brands that invest in meaning, trust, and narrative clarity do not just win markets—they shape generations.',
  },
];

const trainingAreas = [
  'Diplomatic Practice & Protocol – power, representation, and institutional language',
  'Public Relations – trust, reputation, and public legitimacy',
  'Digital Marketing – platforms, metrics, and behavioral data',
  'Law – structure, accountability, and consequence',
  'Travel & Tourism – movement, identity, and economic ecosystems',
  'Cognitive & Behavioral Psychology – how people think, decide, and change',
];

export default function WhyBrandsChoose() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden pattern-hexagon">
      <div className="absolute inset-0 pattern-lines opacity-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Headline */}
        <div className={`mb-16 md:mb-24 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
            <p className="text-xs md:text-sm uppercase tracking-widest text-accent font-semibold">Why Brands Choose to Work With Me</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            The Approach That Builds Long-Term Value
          </h2>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`glass-effect rounded-lg p-8 hover-lift group transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="inline-block p-3 glass-effect rounded-lg mb-6 text-accent group-hover:bg-accent/20 transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                {reason.statement}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {reason.explanation}
              </p>
            </div>
          ))}
        </div>

        {/* Training & Expertise */}
        <div className={`glass-effect rounded-lg p-8 md:p-12 transition-all duration-700 mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
          style={{ transitionDelay: '500ms' }}>
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What I've Studied (and Why It Matters)
          </h3>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
            My academic and professional training is deliberately interdisciplinary because people are not one-dimensional. This allows me to design work that is strategic, ethical, emotionally intelligent, and structurally sound.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingAreas.map((area, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">{area.split('–')[0].trim()}</span>
                  {' '}– {area.split('–')[1]?.trim()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Core Philosophy */}
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}>
          {/* Human-Centered Impact */}
          <div className="glass-effect rounded-lg p-8 md:p-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Human-Centered Impact Over Influencer Marketing
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              <span className="text-foreground font-semibold">Influencer marketing borrows attention. Human-centered impact builds belief.</span>
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Audiences no longer trust borrowed credibility. They trust meaning, consistency, cultural intelligence, and alignment between values and action. Human-centered impact shifts the question from "Who can say this for us?" to "What do we genuinely stand for—and how do people experience it?" That shift is where long-term trust lives.
            </p>
          </div>

          {/* Narrative as Infrastructure */}
          <div className="glass-effect rounded-lg p-8 md:p-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Narrative Conservation & the Power of Media
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Just as ecosystems require protection, narratives do too. <span className="text-foreground font-semibold">Irresponsible storytelling damages identity and distorts aspiration.</span>
            </p>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              Responsible media:
            </p>
            <ul className="space-y-2 ml-6">
              {['Preserves dignity', 'Strengthens belonging', 'Encourages accountability', 'Shapes healthier cultural norms'].map((item, index) => (
                <li key={index} className="text-base text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mt-6">
              Media does not just reflect society—it produces it. That is why I treat narrative as infrastructure, not decoration.
            </p>
          </div>

          {/* Final Word */}
          <div className="glass-effect rounded-lg p-8 md:p-12 border-2 border-accent/30">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
              In Closing: Alignment
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My work is about alignment:
            </p>
            <ul className="space-y-3 mt-6 ml-6">
              {[
                'Between strategy and humanity',
                'Between technology and culture',
                'Between power and responsibility'
              ].map((item, index) => (
                <li key={index} className="text-base text-muted-foreground">
                  <span className="text-foreground font-semibold">— {item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg md:text-xl font-serif font-semibold text-foreground mt-8">
              I do not build campaigns. I build <span className="text-accent">narratives strong enough to carry the future.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
