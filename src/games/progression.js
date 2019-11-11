
import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInt from '../random';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getGameQuestionAndAnswer = () => {
  const start = getRandomInt(1, 20);
  const step = getRandomInt(2, 4);
  const hiddenNumberPosition = getRandomInt(1, 9);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenNumberPosition) {
      question = `${question} ..`;
    } else {
      question = `${question} ${start + (step * i)}`;
    }
  }
  const correctAnswer = start + step * hiddenNumberPosition;

  return cons(question, correctAnswer);
};

export default () => playGame(description, getGameQuestionAndAnswer);
