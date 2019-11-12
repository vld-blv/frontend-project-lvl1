import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInt from '../random';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (x) => x % 2 === 0;

const getGameQuestionAndAnswer = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => playGame(description, getGameQuestionAndAnswer);
