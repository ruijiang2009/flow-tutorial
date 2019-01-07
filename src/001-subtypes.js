// @flow
type ObjectA = { foo: string };
type ObjectB = { foo: string, bar: number };

let objectB: ObjectB = { foo: 'test', bar: 42 };
let objectA: ObjectA = objectB; // Works!

console.log(objectB);
console.log(objectA);


// error part
type ObjectC = { foo: string };
type ObjectD = { foo: number, bar: number };

let objectD: ObjectD = { foo: 1, bar: 2 };
// $ExpectError
// let objectC: ObjectC = objectD; // Error!