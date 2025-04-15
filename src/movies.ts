type MovieDto = {
  gender: string;
  price: number;
  duration: number;
  title: string;
};

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

const movies: MovieDto[] = [];
const addMovie = (props: MovieDto): void => {
  movies.push(props);
};

addMovie(movie1);
addMovie(movie2);
addMovie(movie3);
addMovie(movie4);

const removeMovie = (props: MovieDto): void => {
  const movie = movies.findIndex((value) => value.title === props.title);
  if (movie) {
    movies.splice(movie, 1);
    console.log(`O filme ${props.title} foi removido`);
  } else {
    console.log(`O filme ${props.title} não foi encontrado`);
  }
};
removeMovie(movie2);

console.log(movies);
