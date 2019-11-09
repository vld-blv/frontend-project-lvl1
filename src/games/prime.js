
import { cons } from '@hexlet/pairs';
import gameProcess from '..';
import getRandomInt from '../random';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const isPrimeNumber = (num) => {
  if (isPrime(num)) return 'yes';
  return 'no';
};

const gameQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100);
  const question = number;
  const correctAnswer = isPrimeNumber(number);
  return cons(question, correctAnswer);
};

export default () => gameProcess(description, gameQuestionAndAnswer);
