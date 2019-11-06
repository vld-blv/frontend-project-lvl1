
import gameProcess from '..';
import getRandomInt from '../random';

export const description = 'Find the greatest common divisor of given numbers.';

export const gameQuestionAndAnswer = () => {
  const a = getRandomInt(1, 40);
  const b = getRandomInt(1, 50);
  const gcd = (n, m) => {
    if (m === 0) return n;
    return gcd(m, n % m);
  };
  const correctAnswer = gcd(a, b);
  console.log(`Question: ${a} ${b}`);
  return correctAnswer;
};

export default () => gameProcess(description, gameQuestionAndAnswer);
