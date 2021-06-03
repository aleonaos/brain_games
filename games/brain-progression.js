import play from '../src/engine.js';
import getRandomNumber from '../src/index.js';

const instruction = 'What number is missing in the progression?';

const createProgression = () => {
  const progression = [];
  const lengthProgression = getRandomNumber(5, 10);
  const stepProgression = getRandomNumber(0, 25);

  const firstElement = getRandomNumber(0, 50);
  progression.push(firstElement);

  for (let i = 1; i < lengthProgression; i += 1) {
    progression[i] = progression[i - 1] + stepProgression;
  }

  return progression;
};

const getDataForGame = () => {
  const game = [];

  const progression = createProgression();
  const sizeProgression = progression.length;
  const hiddenElemenet = getRandomNumber(0, sizeProgression - 1);
  const answer = `${progression[hiddenElemenet]}`;
  progression[hiddenElemenet] = '..';

  const question = progression.join(' ');
  game.push(question);

  game.push(answer);
  return game;
};

export default () => play(instruction, getDataForGame);
