// @flow
function acceptsMaybeNumber(value: ?number) {
  // ...
  console.log(acceptsMaybeNumber);
}

acceptsMaybeNumber(42);        // Works!
acceptsMaybeNumber();          // Works!
acceptsMaybeNumber(undefined); // Works!
acceptsMaybeNumber(null);      // Works!
// acceptsMaybeNumber("42");      // Error!


function acceptsMaybeProp({ value }: { value: ?number }) {
  // ...
}

acceptsMaybeProp({ value: undefined }); // Works!
acceptsMaybeProp({});                   // Error! <======== For some reason, rjiang's flow doesn't find the error


function acceptsMaybeNumber(value: ?number) {
  if (typeof value === 'number') {
    return value * 2;
  }
}