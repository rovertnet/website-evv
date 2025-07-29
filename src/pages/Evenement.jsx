import React from 'react'
import EventsSection from '../component/home/EventsSection'
import HeroSlider from '../component/home/HeroSlider';
import EventsSections from '../component/events/SectionEvents';
import ReplaysSection from '../component/events/ReplaysSection';

export default function Evenement() {
  return (
    <>
      <SectionBanner
        title="📅 Événements à venir"
        subtitle="Ne manquez pas nos conférences, séminaires, et rencontres communautaires."
        image="https://cdn.pixabay.com/photo/2015/10/12/15/00/conference-984074_1280.jpg"
      />
      <EventsSections />
      <ReplaysSection />
    </>
  );
}
