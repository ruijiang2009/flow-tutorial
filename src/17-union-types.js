// @flow
function toStringPrimitives(value: number | boolean | string): string { // Error!
  if (typeof value === 'number') {
    return String(value);
  } else if (typeof value === 'boolean') {
    return String(value);
  } else {
    return value;
  }
}

/**Error section starts */
// type Response = {
//   success: boolean,
//   value?: boolean,
//   error?: string
// };

// function handleResponse(response: Response) {
//   if (response.success) {
//     // $ExpectError
//     var value: boolean = response.value; // Error!
//   } else {
//     // $ExpectError
//     var error: string = response.error; // Error!
//   }
// }
/** Error section ends */

type Success = { success: true, value: boolean };
type Failed  = { success: false, error: string };

type Response = Success | Failed;

function handleResponse(response: Response) {
  if (response.success) {
    var value: boolean = response.value; // Works!
  } else {
    var error: string = response.error; // Works!
  }
}



