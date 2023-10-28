//Unions
let trafficLight : boolean | string = false;
trafficLight = "RED";
trafficLight = true;
trafficLight = "BLUE";

//Literals
let _TrafficLight : "RED" | "YELLOW" | "GREEN" = "RED"
// _TrafficLight = "BLUE";      ERROR
let operator : "+" | "-" | "/" | "*" | "%";

//Narrowing
let val : string | number;
// val.toUpperCase()            //ERROR {Only shows common member functions to union types, since types not decided}
//                              //Can not use toUpperCase()
val = 10;                       //Narrowing to specify type
console.log(val.toFixed(2));    //Can use toFixed() now

//Narrowing with Type Guards
function generate(val : number | string)
{
    if(typeof age === "number") console.log(age.toFixed(8));
    else if(typeof age === "string") console.log(age.toUpperCase());
}
let age : number | string = 10;
generate(age);
age = 'abc';
generate(age);

//Objects
let teacher = 
{
    "first-name" : "ABCDE",
    experience : "10"
}
// console.log(teacher.first-name)          //ERROR due to '-'
console.log(teacher["first-name"])          //Correct way
let keyname:string = "first-name";
console.log(teacher[keyname]);              //Another way

let Educator :                              //Bad Practice as to make another object of  same type, we need to re-write the object definition
{
    name: string,
    salary: number,
} = 
{
    name:"XYZ",
    salary: 1000
}
console.log(Educator)

interface ETeacher                          //With interfaces we can assign types on the go without creating redundant code. Similar to the implementation of classes
{
    name:string,
    salary: number
}
let Educator2 : ETeacher;
let Educator3 : ETeacher;
let EducatorList : ETeacher[];

interface Type1
{
    a:number
}
interface Type2
{
    a:number
    b:string
}


interface Animal
{
    name: string
}
interface Cat extends Animal
{
    meow();
}
function isCat(a: Animal) : a is Cat
{
    return true;
}


let x:Type1 = {a:10};
let y:Type2 = {a:100,b:"ABC"};
x = y;                                              //Works since objects can take extra attributes
// y = x;                                           //Doesnt work since objects cant send extra attributes