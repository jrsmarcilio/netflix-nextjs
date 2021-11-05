import axios from "axios";
const api_key = "919eaa165841dfedbcef17cff42ef8ad";

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export const getMovieInfo = (movieID: number) =>
  api.get(`/movie/${movieID}`, {
    params: {
      language: "pt-BR",
      api_key: api_key,
    },
  });

export const getMoviesPopular = api.get(`movie/popular`, {
  params: {
    language: "pt-BR",
    api_key: api_key,
  },
});

export const getTopRated = api.get(`movie/top_rated`, {
  params: {
    language: "pt-BR",
    api_key: api_key,
  },
});

export const getUpComing = api.get(`movie/upcoming`, {
  params: {
    language: "pt-BR",
    page: 2,
    api_key: api_key,
  },
});

export const getNowPlaying = api.get(`movie/now_playing`, {
  params: {
    language: "pt-BR",
    page: 2,
    api_key: api_key,
  },
});

//https://api.themoviedb.org/3/api_key=919eaa165841dfedbcef17cff42ef8ad&page=2&language=pt-br
