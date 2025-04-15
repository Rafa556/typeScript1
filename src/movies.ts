import { addMovie, movies, removeMovie, rentedMovies } from "./movie-database";
import { MovieDto } from "./movie-dto";
import { RentedMovieDto } from "./rented-movie-dto";

const movie1: MovieDto = {
  gender: "Animation",
  price: 10,
  duration: 90,
  title: "How to Train Your Dragon 2",
};

const movie2: MovieDto = {
  gender: "Terror",
  price: 20,
  duration: 180,
  title: "It",
};

const movie3: MovieDto = {
  gender: "Ação",
  price: 19.99,
  duration: 120, // em minutos
  title: "Aventuras em Alto Mar",
};

const movie4: MovieDto = {
  gender: "Comédia",
  price: 14.99,
  duration: 95, // em minutos
  title: "Risos e Aventuras",
};

addMovie(movie1);
addMovie(movie2);
addMovie(movie3);
addMovie(movie4);

removeMovie(movie2);

const rentMovie = (props: MovieDto): void => {
  const movie = movies.find((value) => value.title === props.title);
  if (movie) {
    rentedMovies.push({ movie, rentedAt: new Date() });
    console.log(`O filme "${props.title}" foi alugado`);
  } else {
    console.log(`Filme "${props.title}" não encontrado para aluguel.`);
  }
};

rentMovie(movie1);

const returnDelivery = (props: RentedMovieDto, deliveredAt: Date): void => {
  const deliveryIndex = rentedMovies.findIndex(
    (value) => value.movie === props.movie
  );
  if (deliveryIndex !== -1) {
    const diffTime = deliveredAt.getTime() - props.rentedAt.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let finalPrice = props.movie.price;
    if (diffDays > 7 && diffDays <= 11) {
      const moreDays = diffDays - 7;
      const ratePrice = 0.1 * props.movie.price * moreDays;
      finalPrice += ratePrice;

      console.log(
        `O preço do filme é ${props.movie.price}R$ e a taxa por ter passado ${diffDays} dias é ${ratePrice}R$ e o pagamento é ${finalPrice}R$`
      );
      return;
    }
    if (diffDays >= 12 && diffDays <= 14) {
      const moreDays = diffDays - 7;
      const ratePrice = 0.2 * props.movie.price * moreDays;
      finalPrice += ratePrice;

      console.log(
        `O preço do filme é ${props.movie.price}R$ e a taxa por ter passado ${diffDays} dias é ${ratePrice}R$ e o pagamento é ${finalPrice}R$`
      );
      return;
    }
    if (diffDays >= 15) {
      const moreDays = diffDays - 7;
      const ratePrice = 0.3 * props.movie.price * moreDays;
      finalPrice += ratePrice;

      console.log(
        `O preço do filme é ${props.movie.price}R$ e a taxa por ter passado ${diffDays} dias é ${ratePrice}R$ e o pagamento é ${finalPrice}R$`
      );
      return;
    } else {
      console.log(diffDays);
    }
  }
};

const returnDate = new Date("2025-04-17");

returnDelivery({ movie: movie1, rentedAt: new Date("2025-04-02") }, returnDate);

// funcionalidade para alugar filme = pegar o filme alugado, gravar o dia que foi alugado.
//funcionalidade entrega de volta do filme = pegar a data de entrega, verificar se está dentro do prazo de 7 dias, se estiver, cobrar o preço do filme
// se passar de 7 dias, cobrar uma taxa de 10% do preço * a quantidade de dias a mais
//se passar de 7 dias, se passou de 5 dias 20% e se passou de 8 30%
