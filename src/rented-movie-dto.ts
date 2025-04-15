import { MovieDto } from "./movie-dto";

export type RentedMovieDto = {
  movie: MovieDto;
  rentedAt: Date;
};
