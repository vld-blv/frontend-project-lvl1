
import gameProcess from '..';
import getRandomInt from '../random';

const description = 'What number is missing in the progression?';

const gameQuestionAndAnswer = () => {
  const start = getRandomInt(1, 20);
  const step = getRandomInt(2, 4);
  const hiddenNumberPosition = getRandomInt(1, 9);
  let prog = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === hiddenNumberPosition) {
      prog = `${prog} ..`;
    } else {
      prog = `${prog} ${start + (step * i)}`;
    }
  }
  const correctAnswer = start + step * hiddenNumberPosition;
  console.log(`Question: ${prog}`);
  return correctAnswer;
};

export default () => gameProcess(description, gameQuestionAndAnswer);
