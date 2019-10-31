
import getRandomInt from '../random';


const operators = '*+-';

export const description = 'What is the result of the expression?';

export const calc = () => {
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
