import readlineSync from 'readline-sync';

export const play = () => {
  console.log('Welcome to the Brain Games!');
  
};

export const greeting = (userName) => console.log(`Hello, ${userName}!`);

const isEven = (number) => (number > 0 && number % 2 === 0);

const correctAnswer = (answer) => {
  if (answer === 'yes') {
    return 'no';
  }
  return 'yes';
};

export const parityCheck = () => {
  const userName = playerName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 100);

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    const evenButNo = isEven(number) && answer !== 'yes';
    const notEvenButYes = !isEven(number) && answer !== 'no';

    if (evenButNo || notEvenButYes) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(answer)}'`);
      return console.log(`Let's try again, ${userName}!`);
    }

    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
