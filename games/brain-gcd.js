import play from '../src/engine.js';
import getRandomNumber from '../src/index.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  if (number2 > number1) {
    findGcd(number2, number1);
  }
  if (!number2) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

const getDataForGame = () => {
  const game = [];

  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);

  const question = `${number1} ${number2}`;
  game.push(question);

  const result = findGcd(number1, number2);

  const answer = `${result}`;
  game.push(answer);
  return game;
};

export default () => play(instruction, getDataForGame);
