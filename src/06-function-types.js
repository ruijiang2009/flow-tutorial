// @flow

function concat(a: string, b: string): string {
  return a + b;
}

concat("foo", "bar"); // Works!
// $ExpectError
// concat(true, false);  // Error!

function concat2(a, b) {
  return a + b;
}

concat2("foo", "bar"); // Works!
// $ExpectError
//concat2(true, false);  // Error!


function method() {
  console.log(this);
  return this;
}

var num: number = method.call(42);
// console.log(num)
// $ExpectError
// var str: string = method.call("42");


// predicate function

function truthy(a, b): boolean %checks {
  return !!a && !!b;
}

function concat(a: ?string, b: ?string): string {
  if (truthy(a, b)) {
    return a + b;
  }
  return '';
}


/* // error section start
function truthy1(a, b): boolean {
  return a && b;
}

function concat1(a: ?string, b: ?string): string {
  if (truthy1(a, b)) {
    // $ExpectError
    console.log(typeof (a+b));
    return a + b;
  }
  return '';
}

concat1("a", "b")
// error section end  */

// callable objects
type CallableObj = {
  (number, number): number,
  bar: string
};

function add(x, y) {
  return x + y; 
}

console.log(typeof add);
// $ExpectError
// (add: CallableObj); 

add.bar = "hello world";

(add: CallableObj);
