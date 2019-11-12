
import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInt from '../random';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const getGameQuestionAndAnswer = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => playGame(description, getGameQuestionAndAnswer);
