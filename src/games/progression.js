import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInt from '../random';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getGameQuestionAndAnswer = () => {
  const start = getRandomInt(1, 20);
  const step = getRandomInt(2, 4);
  const hiddenPosition = getRandomInt(1, progressionLength - 1);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenPosition) {
      question = `${question} ..`;
    } else {
      question = `${question} ${start + (step * i)}`.trim();
    }
  }
  const correctAnswer = start + step * hiddenPosition;

  return cons(question, correctAnswer);
};

export default () => playGame(description, getGameQuestionAndAnswer);
