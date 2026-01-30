'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Linkedin, Mail, Instagram } from 'lucide-react';
import Hero from '@/components/Hero';
import FeaturedInsights from '@/components/FeaturedInsights';
import ServicesOverview from '@/components/ServicesOverview';
import ProfessionalPhoto from '@/components/ProfessionalPhoto';
import StrategicPhilosophy from '@/components/StrategicPhilosophy';
import WhatIDo from '@/components/WhatIDo';
import CampaignsWork from '@/components/CampaignsWork';
import WhyBrandsChoose from '@/components/WhyBrandsChoose';
import DigitalLibrary from '@/components/DigitalLibrary';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <FeaturedInsights />
      <ServicesOverview />
      <ProfessionalPhoto />
      <StrategicPhilosophy />
      <WhatIDo />
      <CampaignsWork />
      <WhyBrandsChoose />
      <DigitalLibrary />
      <CTASection />
      <Footer />
    </main>
  );
}
