import React from 'react'
import EventsSection from '../component/home/EventsSection'
import HeroSlider from '../component/home/HeroSlider';
import EventsSections from '../component/events/SectionEvents';
import ReplaysSection from '../component/events/ReplaysSection';

export default function Evenement() {
  return (
    <>
      <HeroSlider />
      <EventsSections />
      <ReplaysSection />
    </>
  );
}
