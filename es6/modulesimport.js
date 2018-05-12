import {sum, PI} from 'modules.js';

console.log('2 Pi is: '+sum(PI,PI));

//using wild cards

import * as math from './code-listing-113'; 
console.log('2 pi = ' + math.sum(math.pi, math.pi));