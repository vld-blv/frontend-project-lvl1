
import gameProcess from '..';
import getRandomInt from '../random';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestionAndAnswer = () => {
  const isEven = (x) => x % 2 === 0;
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => gameProcess(description, gameQuestionAndAnswer);
