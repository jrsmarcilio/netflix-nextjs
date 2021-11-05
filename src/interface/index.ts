export interface IShowModal {
  show: boolean;
  onClose: () => void;
  movie: IMovie | undefined;
}

export interface IMovieContext {
  moviesPopular: IMovie[];
  topRated: IMovie[];
  upComing: IMovie[];
  nowPlaying: IMovie[];
}

export interface IMovie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  language: string;
  original_title: string;
  title: string;
  popularity: number;
  poster_path: string;
  releaseDate: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  overview: string;
}
