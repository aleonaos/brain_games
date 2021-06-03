import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const play = (instruction, getDataForGame) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(instruction);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const dataForGame = getDataForGame();
    const question = dataForGame[0];
    const answer = dataForGame[1];
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (answer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      return console.log(`Let's try again, ${playerName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default play;
