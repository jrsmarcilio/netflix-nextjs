import axios from "axios";
const api_key = "919eaa165841dfedbcef17cff42ef8ad";

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export const getMovieInfo = (movieID: number) =>
  api.get(`/movie/${movieID}?language=pt-BR&api_key=${api_key}`);

export const getMoviesPopular = api.get(
  `movie/popular?language=pt-BR&api_key=${api_key}`
);
