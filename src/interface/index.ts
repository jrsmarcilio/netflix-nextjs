export interface IMovieContext {
  movies: IMovie[];
}

export interface IMovie {
  id?: number;
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  language: string;
  originalTitle: string;
  title: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
