import React from 'react';
import HeroSection from './HeroSection';
import DesignPayment from './DesignPayment';
import SlideSection from './SlideSection';
import ContactSection from './ContactSection';
import CardSection from './CardSection';

function Pricing() {
  return (
    <div>
      <HeroSection/>
      <CardSection/>
      <DesignPayment/>
      <SlideSection/>
      <ContactSection/>
    </div>
  );
}

export default Pricing;
