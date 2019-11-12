import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInt from '../random';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (n, m) => {
  if (m === 0) return n;
  return getGCD(m, n % m);
};

const getGameQuestionAndAnswer = () => {
  const a = getRandomInt(1, 40);
  const b = getRandomInt(1, 50);
  const question = `${a} ${b}`;
  const correctAnswer = getGCD(a, b);
  return cons(question, correctAnswer);
};

export default () => playGame(description, getGameQuestionAndAnswer);
