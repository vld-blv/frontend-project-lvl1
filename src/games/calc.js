
import gameProcess from '..';
import getRandomInt from '../random';


const description = 'What is the result of the expression?';

const operators = '*+-';

const gameQuestionAndAnswer = () => {
  const a = getRandomInt(1, 40);
  const b = getRandomInt(1, 50);
  const randomOperator = operators.substr(getRandomInt(0, operators.length - 1), 1);
  let correctAnswer = 0;
  console.log(`Question: ${a} ${randomOperator} ${b}`);

  switch (randomOperator) {
    case '*':
      correctAnswer = a * b;
      break;
    case '+':
      correctAnswer = a + b;
      break;
    case '-':
      correctAnswer = a - b;
      break;
    default:
      console.log(null);
  }

  return correctAnswer;
};

export default () => gameProcess(description, gameQuestionAndAnswer);
