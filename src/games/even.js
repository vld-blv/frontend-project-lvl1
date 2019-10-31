
import getRandomInt from '../random';


export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEvenNumber = () => {
  const isEven = (x) => (x % 2 === 0 ? 'yes' : 'no');
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);
  const correctAnswer = isEven(number);
  return correctAnswer;
};
