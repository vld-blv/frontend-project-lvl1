import readlineSync from 'readline-sync';


const gameProcess = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = game();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
    console.log('Correct!\n');
    if (i === 2) console.log(`Congratulations, ${playerName}!`);
  }
};

export default gameProcess;
