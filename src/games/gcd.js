
import { cons } from '@hexlet/pairs';
import gameProcess from '..';
import getRandomInt from '../random';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m === 0) return n;
  return gcd(m, n % m);
};

const gameQuestionAndAnswer = () => {
  const a = getRandomInt(1, 40);
  const b = getRandomInt(1, 50);
  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b);
  return cons(question, correctAnswer);
};

export default () => gameProcess(description, gameQuestionAndAnswer);
