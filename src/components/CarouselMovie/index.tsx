import React, { useContext, useEffect, useState } from "react";
import MovieContext from "@/context/movie";

import { Container } from "@material-ui/core";

import { IMovieContext } from "@/interface";
import { CarouselContent } from "./styles";

import CarouselItem from "./CarouselItem";

export default function CarouselMovie() {
  const [movieData, setMovieData] = useState<IMovieContext>(
    { moviesPopular: [], topRated: [], upComing: [], nowPlaying: [] }
  );
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    setMovieData({
      moviesPopular: movieContext.moviesPopular,
      topRated: movieContext.topRated,
      upComing: movieContext.upComing,
      nowPlaying: movieContext.nowPlaying,
    });
  }, [movieContext]);

  return (
    <CarouselContent>
      <Container maxWidth="xl">
        <CarouselItem movies={movieData.moviesPopular} title="Continue assistindo" />
        <CarouselItem movies={movieData.topRated} title="Mais votados" />
        <CarouselItem movies={movieData.upComing} title="Próximos" />
        <CarouselItem movies={movieData.nowPlaying} title="Passando agora" />

      </Container>
    </CarouselContent >
  );
}
