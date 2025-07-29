import React from 'react'
import LocationSection from '../component/contact/LocationSection'
import HeroSlider from '../component/home/HeroSlider';
import ContactSection from '../component/contact/ContactSection';
import SectionBanner from '../component/SectionBanner';

export default function Contact() {
  return (
    <>
      <SectionBanner
        title="📩 Nous contacter"
        subtitle="Besoin d'informations ? Une question ? N’hésitez pas à nous écrire ou à nous appeler."
        image="https://cdn.pixabay.com/photo/2015/01/21/14/14/contact-us-606139_1280.jpg"
      />

      <LocationSection />
      <ContactSection />
    </>
  );
}
