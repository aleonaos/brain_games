import play from '../src/engine.js';
import getRandomNumber from '../src/random.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const halfNumber = number * 0.5;

  for (let i = 2; i <= halfNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getDataForGame = () => {
  const game = [];

  const question = getRandomNumber(0, 100);
  game.push(question);

  const answer = isPrime(question) ? 'yes' : 'no';
  game.push(answer);

  return game;
};

export default () => play(instruction, getDataForGame);
