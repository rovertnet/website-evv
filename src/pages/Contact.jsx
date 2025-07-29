import React from 'react'
import LocationSection from '../component/contact/LocationSection'
import HeroSlider from '../component/home/HeroSlider';
import ContactSection from '../component/contact/ContactSection';

export default function Contact() {
  return (
    <>
      <HeroSlider />
      <LocationSection />
      <ContactSection />
    </>
  );
}
