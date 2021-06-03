import play from '../src/engine.js';
import getRandomNumber from '../src/index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number > 0 && number % 2 === 0);

const getDataForGame = () => {
  const game = [];

  const question = getRandomNumber(0, 100);
  game.push(question);

  const answer = isEven(question) ? 'yes' : 'no';
  game.push(answer);

  return game;
};

export default () => play(instruction, getDataForGame);
