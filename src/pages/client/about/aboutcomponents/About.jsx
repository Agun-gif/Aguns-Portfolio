import React from 'react';
import HeroSection from './HeroSection';
import MyDetails from './MyDetails';
import SocialLink from './SocialLink';
import AwardSection from './AwardSection';
import SlideSection from './SlideSection';
import Contact from './Contact';

function About() {
  return (
    <div>
      <HeroSection/>
      <MyDetails/>
      <SocialLink/>
      <AwardSection/>
      <SlideSection/>
      <Contact/>
    </div>
  );
}

export default About;
