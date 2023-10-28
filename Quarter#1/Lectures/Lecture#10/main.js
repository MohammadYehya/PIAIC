//First way to define an array
var arr1 = ["ABC", "DEF", "GHI"];
//Second way to define an array
var arr2 = [7446, 3147, 3309];
//Union Types with Arrays
var arr3 = [1000, "Hello", "Hi", 0];
//Tuples - Length and Type is Fixed
var arr4 = ["abc", 100];
var arr5 = [["abc", 100], ["xyz", 909], ["pqr", 123]];
//Tuples with Literal Types
var arr6 = ["Hello", 101];
//Functions
//Named Function
function SUM(n1, n2) {
    return n1 + n2;
}
//Anonymous Function
var Sum_ = function (n1, n2) {
    return n1 + n2;
};
//Arrow/Lambda Function
var Sum__ = function (n1, n2) { return n1 + n2; };
var Sum___ = function (n1, n2) {
    return n1 + n2;
};
//Ternary Operator
var x = 10;
var ans = x === 10 ? true : false;
//Callback Functions
function abc() {
    console.log("Hello from abc\n");
}
function xyz(fn) {
    fn();
}
xyz(abc);
