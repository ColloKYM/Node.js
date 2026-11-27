// app.js
/*
import { add, subtract } from './math.js';

console.log (add(2,3));
console.log (subtract(9, 4));
*/

import { add as sum } from './math.js';
import * as math from './math.js';
import greet  from './greet.js';

console.log (greet('Amina'));

console.log (sum(1,2));
console.log (math.subtract(10,2));

const name = process.argv[2] ?? 'friend';
 console.log(`Hello, ${name}!`);

 console.log ('1. Start');
 setTimeout (() => console.log ('3. Done waiting'), 1000);
 console.log('2. Still working');


console.log(typeof window);
