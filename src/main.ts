type HeroDto = {
  fly: boolean;
  power: boolean;
};

const heroi1: HeroDto = {
  fly: false,
  power: true,
};

const heroi2: HeroDto = {
  fly: true,
  power: false,
};

const heroi3: HeroDto = {
  fly: true,
  power: true,
};

const heroi4: HeroDto = {
  fly: false,
  power: false,
};

const heros: HeroDto[] = [];
const addHero = (props: HeroDto): void => {
  heros.push(props);
};

addHero(heroi1);
addHero(heroi2);
addHero(heroi3);
addHero(heroi4);

const verificaHeroi = (props: HeroDto): string => {
  heros.findIndex((value) => value === props);
  if (props.fly === true && props.power === true) {
    return "Eu sou o Superman!";
  }
  if (props.fly === true && props.power === false) {
    return "Eu sou o lanterna verde!";
  }
  if (props.fly === false && props.power === true) {
    return "Eu sou o hulk!";
  } else {
    return "I AM BATMAN!!!";
  }
};

// console.log(verificaHeroi(heroi1));
console.log(verificaHeroi({ fly: false, power: false }));
