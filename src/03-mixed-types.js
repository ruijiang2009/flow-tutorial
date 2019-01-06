// @flow

function stringifyBasicValue(value: string | number) {
  return '' + value;
}

// input and output are same type
function identity<T>(value: T): T {
  return value;
}

function getTypeOf(value: mixed): string {
  return typeof value;
}

function stringify(value: mixed) {
  if (typeof value === 'string') {
    return "" + value; // Works!
  } else {
    return "non-supported";
  }
}

console.log(stringify("foo"));
console.log(stringify(1));