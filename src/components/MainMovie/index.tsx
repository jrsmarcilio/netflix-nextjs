import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { FaPlay } from "react-icons/fa";
import MovieContext from "@/context/movie";

import BrandCategory from "@/components/BrandCategory";
import { BtnContained, BtnOutlined } from '@/styles/MaterialGuide'
import { MainMovieContainer, BgWrapper } from './styles';
import { IMovie } from '@/interface';
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function MainMovie() {
  const [mainMovie, setMainMovie] = useState<IMovie>();
  const moviesData = React.useContext(MovieContext);

  useEffect(() => {
    const random = Math.floor(Math.random() * moviesData.movies.length - 1);
    setMainMovie(moviesData.movies[random]);
  }, [moviesData.movies]);

  return (
    <MainMovieContainer>
      <BgWrapper>
        <Image
          src={`https://image.tmdb.org/t/p/original/${mainMovie?.backdrop_path}`}
          alt={`backdrop image of ${mainMovie?.title}`}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </BgWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={2} direction="row">
          <Grid item xs={6} container direction="column">
            <BrandCategory category='Filmes' />
            <Typography variant="h2" component="h2">
              {mainMovie?.title}
            </Typography>
          </Grid>
          <Grid container direction="column" justifyContent="space-between">
            <Grid item xs={7} container direction="row">
              <BtnContained variant="contained">
                <FaPlay />
                Assistir
              </BtnContained>
              <BtnOutlined variant="outlined">
                <AiOutlineInfoCircle />
                Mais Informações
              </BtnOutlined>
            </Grid>
            <Grid item xs={4} container alignItems="flex-end" justifyContent="flex-end"
            >
              <Box width={100} height={50} bgcolor="rgba(51,51,51,.6)">
                <Typography variant="button">
                  {mainMovie?.adult ? '18' : '16'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MainMovieContainer>
  );
}
