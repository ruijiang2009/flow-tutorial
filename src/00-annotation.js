// @flow

// function concat(a, b) {
//   return a + b;
// }

// console.log(concat("A", "B")); // Works!

// Setup type for input
function concat(a: string, b: string) {
  console.log("concat")
  return a + b;
}

console.log(concat("A", "B")); // Works!