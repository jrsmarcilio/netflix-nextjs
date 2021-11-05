import React from 'react';

import HeaderComponent from '@/components/Header'
import MainMovieComponent from '@/components/MainMovie'
import CarouselMovie from '@/components/CarouselMovie';
import { HomeContent } from '@/styles/pages/home';

export default function Home() {
  return (
    <HomeContent>
      <HeaderComponent />
      <MainMovieComponent />
      <CarouselMovie />
    </HomeContent>
  );
}

