// @flow
function method(x: number, y: string, z: boolean) {
  console.log("number ", x, " string: ", y, " boolean: ", z);
}

method(3.14, "hello", true);


function method2(x: Number, y: String, z: Boolean) {
  console.log("number ", x, " string: ", y, " boolean: ", z);
}

method2(new Number(42), new String("world"), new Boolean(false));