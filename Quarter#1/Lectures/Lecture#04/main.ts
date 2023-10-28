let arr: any[] = ["A","B","C","D"]

arr.push("E");
console.log(arr);

arr.pop();
console.log(arr);


arr.shift();
console.log(arr);

arr.unshift("A");
console.log(arr);


arr.splice(0,1,"a");
console.log(arr);

let arr1 = arr.slice(1,3);
console.log(arr1);

let arr2 = arr.slice(2); // Same as multiple shift() functions
console.log(arr2);


let num1 = 10;
let num2 = 11;

function abc()
{
    return num1 + num2
}
num1 = 69;
num2 = 100;
console.log(abc());