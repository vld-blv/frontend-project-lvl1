
import { cons } from '@hexlet/pairs';
import gameProcess from '..';
import getRandomInt from '../random';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (n) => {
  for (let i = 1; i <= n / 2; i += 1) {
    if (n % i === 0) return 'no';
  }
  return 'yes';
};

const gameQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100);
  const question = number;
  const correctAnswer = isPrimeNumber(number);
  return cons(question, correctAnswer);
};

export default () => gameProcess(description, gameQuestionAndAnswer);
