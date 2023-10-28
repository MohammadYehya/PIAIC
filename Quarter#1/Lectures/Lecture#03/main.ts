let num : number;

// = is for assignment purposes - Assignment Operator
num = 10;

// == is for comparison purposes - Comparison Operator
// Can be used to compare between two different Types (Would be allowed in Javascript)
num == 10;
//num == "10";

// === is for comparison purposes - Comparison Operator
// Only compares the same Type
num === 10
//num === "10" - Error

// != is for comparison purposes - Comparison Operator
// Is the negation of ==
num != 10;

// < > <= >= are for comparison purposes - Comparison Operators
num > 10;
num < 10;
num <= 10;
num >= 10;

let email = "hamzah.syed@gmail.com";
let password = "12345";
let result : any = (email === "hamzah.syed@gmail.com") && password === "12345";
console.log(result);