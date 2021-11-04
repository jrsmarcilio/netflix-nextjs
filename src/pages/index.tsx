import React, { Fragment } from 'react';

import HeaderComponent from '@/components/Header'
import MainMovieComponent from '@/components/MainMovie'

export default function Home() {
  return (
    <Fragment>
      <HeaderComponent />
      <MainMovieComponent />
    </Fragment>
  );
}

