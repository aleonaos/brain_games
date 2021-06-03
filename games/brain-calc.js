import play from '../src/engine.js';
import getRandomNumber from '../src/index.js';

const instruction = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const lastIndex = operators.length - 1;

const getDataForGame = () => {
  const game = [];

  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operatorNumber = getRandomNumber(0, lastIndex);
  const operator = operators[operatorNumber];

  const question = `${number1} ${operator} ${number2}`;
  game.push(question);

  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = 0;
      break;
  }
  const answer = `${result}`;
  game.push(answer);
  return game;
};

export default () => play(instruction, getDataForGame);
