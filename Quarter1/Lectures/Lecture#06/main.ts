//Objects
let user = 
{
    username: "Mohammad",
    age: 10,
    isMarried: false,
    Sayhello: function sayhello(){
        console.log("hello");
    }
}
interface STudent
{
    username: string;
    age: number;
    isMarried: boolean;
    Sayhello: () => void;
}
console.log(user);
user.Sayhello();

//Errors
//Syntax Error
//lett fName = "Mohammad";

//Type Error
//console.logg("Hello");

//Assignability Error
let age = 10;
//age = "10"


//Strong Typing
//Strongly Typed Syntax
let a : string = "Ali";

//Type Inference
let b = "Ahmed";


//
import { num, sum } from "./calc"
console.log(sum(num,2))