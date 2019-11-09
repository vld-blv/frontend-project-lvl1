
import { cons } from '@hexlet/pairs';
import gameProcess from '..';
import getRandomInt from '../random';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (x) => x % 2 === 0;

const gameQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameProcess(description, gameQuestionAndAnswer);
