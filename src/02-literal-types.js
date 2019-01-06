// @flow
function acceptsTwo(value: 2) {
  console.log("accept only 2");
}

acceptsTwo(2);   // Works!
// $ExpectError
// acceptsTwo(3);   // Error!
// // $ExpectError
// acceptsTwo("2"); // Error!


/****** Union Types: ******/

function getColor(name: "success" | "warning" | "danger") { // <========== Union types
  switch (name) {
    case "success" : return "green";
    case "warning" : return "yellow";
    case "danger"  : return "red";
  }
}

getColor("success"); // Works!
getColor("danger");  // Works!
// $ExpectError
//getColor("error");   // Error!