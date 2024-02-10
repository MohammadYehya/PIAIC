"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Objects
var user = {
    username: "Mohammad",
    age: 10,
    isMarried: false,
    Sayhello: function sayhello() {
        console.log("hello");
    }
};
console.log(user);
user.Sayhello();
//Errors
//Syntax Error
//lett fName = "Mohammad";
//Type Error
//console.logg("Hello");
//Assignability Error
var age = 10;
//age = "10"
//Strong Typing
//Strongly Typed Syntax
// let a : string = "Ali";
//Type Inference
var b = "Ahmed";
//
var calc_1 = require("./calc");
console.log((0, calc_1.sum)(calc_1.num, 2));
