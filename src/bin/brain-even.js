#!/usr/bin/env node

import {greeting} from '..';
import {answer} from '../brain-even';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

greeting();

answer();