import { MovieDto } from "./movie-dto";
import { RentedMovieDto } from "./rented-movie-dto";

export const rentedMovies: RentedMovieDto[] = [];
export const movies: MovieDto[] = [];

export const addMovie = (props: MovieDto): void => {
  movies.push(props);
};

export const removeMovie = (props: MovieDto): void => {
  const movie = movies.findIndex((value) => value.title === props.title);
  if (movie !== -1) {
    movies.splice(movie, 1);
    console.log(`O filme ${props.title} foi removido`);
  } else {
    console.log(`O filme ${props.title} não foi encontrado`);
  }
};
