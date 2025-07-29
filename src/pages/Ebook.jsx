import React from 'react'
import HeroSlider from '../component/home/HeroSlider'
import BooksForSaleSection from '../component/ebook/BooksForSaleSection';
import SectionBanner from '../component/SectionBanner';

export default function Ebook() {
  return (
    <>
      <SectionBanner
        title="📚 Bibliothèque en ligne"
        subtitle="Explorez notre collection d’eBooks spirituels, disponibles en téléchargement."
        image="https://cdn.pixabay.com/photo/2016/11/21/16/09/book-1845655_1280.jpg"
      />
      <BooksForSaleSection />
    </>
  );
}
