import React, { useEffect, useState } from "react";
import { IMovie, IMovieContext } from "@/interface";
import { getMoviesPopular, getTopRated, getUpComing, getNowPlaying } from "@/service/api";

export interface IChildren {
  children?: React.ReactChildren | JSX.Element | JSX.Element[];
}

const defaultValues: IMovie = {
  id: 0,
  adult: false,
  backdrop_path: "",
  genre_ids: [],
  language: "",
  original_title: "",
  title: "",
  popularity: 0,
  poster_path: "",
  releaseDate: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
  overview: ''
};

const MovieContext = React.createContext<IMovieContext>({
  moviesPopular: [defaultValues],
  topRated: [defaultValues],
  upComing: [defaultValues],
  nowPlaying: [defaultValues],
});

const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [topRated, setTopRated] = useState<IMovie[]>([defaultValues]);
  const [moviesPopular, setMoviesPopular] = useState<IMovie[]>([defaultValues]);
  const [upComing, setUpComing] = useState<IMovie[]>([defaultValues]);
  const [nowPlaying, setNowPlaying] = useState<IMovie[]>([defaultValues]);

  useEffect(() => {
    async function fetchTopRated() {
      const response = await getTopRated;
      setTopRated(response.data.results);
    }
    async function fetchMoviesPopular() {
      const response = await getMoviesPopular;
      setMoviesPopular(response.data.results);
    }
    async function fetchUpComing() {
      const response = await getUpComing;
      setUpComing(response.data.results);
    }
    async function fetchNowPlaying() {
      const response = await getNowPlaying;
      setNowPlaying(response.data.results);
    }

    fetchNowPlaying();
    fetchUpComing();
    fetchMoviesPopular();
    fetchTopRated();
  }, []);

  return (
    <MovieContext.Provider value={
      {
        moviesPopular: moviesPopular,
        topRated: topRated,
        upComing: upComing,
        nowPlaying: nowPlaying,
      }
    }>
      {children}
    </MovieContext.Provider>
  )
}

export { MovieContextProvider };
export default MovieContext;
