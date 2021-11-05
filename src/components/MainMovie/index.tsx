import React, { Fragment, useEffect, useState, useContext } from "react";
import Image from 'next/image';
import MovieContext from "@/context/movie";
import { useRouter } from "next/router";

import { Box, Container, Grid, Typography, Modal } from "@material-ui/core";

import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

import BrandCategory from "@/components/BrandCategory";
import { BtnContained, BtnOutlined } from '@/styles/MaterialGuide'
import { MainMovieContainer, BgWrapper } from './styles';
import { IMovie } from '@/interface';

export default function MainMovie() {
  const [moviesPopular, setMoviesPopular] = useState<IMovie>();
  const movieContext = useContext(MovieContext);
  const router = useRouter();

  useEffect(() => {
    const random = Math.floor(
      Math.random() * movieContext.moviesPopular.length - 1
    );
    setMoviesPopular(movieContext.moviesPopular[random]);
  }, [movieContext.moviesPopular]);

  const handleClickMoreInfor = () => {
    router.push(`/movie/${moviesPopular?.id}`);
  }

  return (
    <MainMovieContainer>
      <BgWrapper>
        <Image
          src={`https://image.tmdb.org/t/p/original/${moviesPopular?.backdrop_path}`}
          alt={`backdrop image of ${moviesPopular?.title}`}
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
              {moviesPopular?.title}
            </Typography>
          </Grid>
          <Grid container direction="column" justifyContent="space-between">
            <Grid item xs={7} container direction="row">
              <BtnContained variant="contained">
                <FaPlay />
                Assistir
              </BtnContained>
              <BtnOutlined variant="outlined">
                <AiOutlineInfoCircle onClick={handleClickMoreInfor} />
                Mais Informações
              </BtnOutlined>
            </Grid>
            <Grid item xs={4} container alignItems="flex-end" justifyContent="flex-end"
            >
              <Box width={100} height={50} bgcolor="rgba(51,51,51,.6)">
                <Typography variant="button">
                  {moviesPopular?.adult ? '18' : '16'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MainMovieContainer>
  );
}
