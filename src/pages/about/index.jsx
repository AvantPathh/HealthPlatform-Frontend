import React from 'react';
import AboutHero from './component/aboutHero';
import Features from './component/features';
import HowItWorks from './component/howItWorks';
import OurTeam from './component/ourTeam';
import Testimonials from './component/testimonials';
import FutureGoals from './component/futereGoals';
import Department from './component/department';

const About = () => {
  return (
    <div>
      <AboutHero />
      <Features />
      <HowItWorks />
      <OurTeam />
      <Department />
      <Testimonials />
      <FutureGoals />
    </div>
  );
};

export default About;
