//First way to define an array
let arr1 : string[] = ["ABC","DEF","GHI"];

//Second way to define an array
let arr2 : Array<number> = [7446, 3147, 3309];

//Union Types with Arrays
let arr3 : Array<number | string> = [1000, "Hello", "Hi", 0];


//Tuples - Length and Type is Fixed
let arr4 : [string, number] = ["abc",100];

let arr5 : [string, number][] = [["abc", 100], ["xyz", 909], ["pqr", 123]];

//Tuples with Literal Types
let arr6 : [string, 101] = ["Hello", 101];

//Functions
//Named Function
function SUM(n1 : number, n2 : number) : number
{
    return n1 + n2;
}

//Anonymous Function
let Sum_ = function(n1 : number, n2 : number) : number
{
    return n1 + n2;
};

//Arrow/Lambda Function
let Sum__ = (n1 : number, n2 : number)=>{return n1 + n2;}

let Sum___ : (n1 : number,n2 : number)=>number = (n1 : number,n2 : number) =>
{
    return n1 + n2;
}

//Ternary Operator
let x = 10;
let ans = x===10? true : false;

//Callback Functions
function abc()
{
    console.log("Hello from abc\n");
}
type ifn = ()=>void;
function xyz(fn:ifn)
{
    fn();
}
xyz(abc);