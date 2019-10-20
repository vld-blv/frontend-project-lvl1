import readlineSync from 'readline-sync';
import {name} from '.';

const getRandomInt = () => Math.floor(Math.random() * 100);
const isEven = (x) => x % 2 === 0 ? 'yes' : 'no';

export const answer = () => {
  for (let i = 0; i <= 2; i += 1) {
    const number = getRandomInt();
    console.log(`\nQuestion: ${number}`);
    const actual = readlineSync.question('Your answer: ');
    if (actual !== isEven(number)) {
      console.log(`'${actual}' is wrong answer ;(. Correct answer was '${isEven(number)}'.`);
      console.log(`Let's try again, ${name}!`)
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
