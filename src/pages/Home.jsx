import React from 'react'
import ActivitiesSection from '../component/home/ActivitieSection'
import ContactSection from '../component/home/ContactSection'
import DonationBannerWithQR from '../component/home/DonationBannerWithQR'
import EbooksSection from '../component/home/ebook/EbooksSection'
import EventsSection from '../component/home/EventsSection'
import GallerySection from '../component/home/GallerySection'
import HeroSlider from '../component/home/HeroSlider'
import TeamSection from '../component/home/TeamSection'
import VideosSection from '../component/home/VideosSection'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ActivitiesSection />
      <VideosSection />
      <EbooksSection />
      <EventsSection />
      <ContactSection />
      <TeamSection />
      <GallerySection />
      <DonationBannerWithQR />
    </>
  )
}
