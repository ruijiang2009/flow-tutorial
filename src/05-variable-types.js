// @flow

const foo /* : number */ = 1;
const bar: number = 2; // <====== bar has type as number

console.log(typeof bar);


var barVar: number = 2;
let barLet: number = 2;


let foo1 = 42;

if (Math.random()) foo1 = true;
if (Math.random()) foo1 = "hello";

let isOneOf: number | boolean | string = foo; // Works!