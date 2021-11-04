import React, { useEffect, useState } from "react";
import { IMovie, IMovieContext } from "@/interface";
import { getMoviesPopular } from "@/service/api";

export interface IChildren {
  children?: React.ReactChildren | JSX.Element | JSX.Element[];
}

const defaultValues: IMovie = {
  id: 0,
  adult: false,
  backdrop_path: "",
  genre_ids: [],
  language: "",
  originalTitle: "",
  title: "",
  popularity: 0,
  posterPath: "",
  releaseDate: "",
  video: false,
  voteAverage: 0,
  voteCount: 0,
};

const MovieContext = React.createContext<IMovieContext>({
  movies: [defaultValues],
});

const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [moviesData, setMoviesData] = useState<IMovie[]>([defaultValues]);

  useEffect(() => {
    async function getMovie() {
      const response = await getMoviesPopular;
      setMoviesData(response.data.results);
    }
    getMovie();
  }, []);

  return (
    <MovieContext.Provider value={{ movies: moviesData }}>
      {children}
    </MovieContext.Provider>
  )
}

export { MovieContextProvider };
export default MovieContext;
