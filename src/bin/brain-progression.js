#!/usr/bin/env node

import gameProcess from '..';
import { description, makeProgression } from '../games/progression';

gameProcess(description, makeProgression);
