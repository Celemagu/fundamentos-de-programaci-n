/**
 * 
 */
let num1 =10;
let num2 =20;

import {addTwoNumbers, substractTwoNumbers,timesTwoNumbers,divideTwoNumbers } from './math-helpers.js';

let totals = addTwoNumbers (num1,num2);
let totalr = substractTwoNumbers (num1,num2);
let totalm = timesTwoNumbers (num1,num2);
let totald = divideTwoNumbers (num1,num2);

console.log ("add: "+ totals);
console.log ("Total: "+ totalr);
console.log ("Total: "+ totalm);
console.log ("Total: "+ totald);


