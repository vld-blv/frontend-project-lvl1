#!/usr/bin/env node

import gameProcess from '..';
import { description, isPrime } from '../games/prime';

gameProcess(description, isPrime);
