
import { cons } from '@hexlet/pairs';
import gameProcess from '..';
import getRandomInt from '../random';


const description = 'What is the result of the expression?';

const operators = '*+-';

const gameQuestionAndAnswer = () => {
  const a = getRandomInt(1, 40);
  const b = getRandomInt(1, 50);
  const randomOperator = operators.substr(getRandomInt(0, operators.length - 1), 1);
  const question = `${a} ${randomOperator} ${b}`;
  let correctAnswer = 0;

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

  return cons(question, correctAnswer);
};

export default () => gameProcess(description, gameQuestionAndAnswer);
