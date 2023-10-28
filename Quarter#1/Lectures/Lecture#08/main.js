//Unions
var trafficLight = false;
trafficLight = "RED";
trafficLight = true;
trafficLight = "BLUE";
//Literals
var _TrafficLight = "RED";
// _TrafficLight = "BLUE";      ERROR
var operator;
//Narrowing
var val;
// val.toUpperCase()            //ERROR {Only shows common member functions to union types, since types not decided}
//                              //Can not use toUpperCase()
val = 10; //Narrowing to specify type
console.log(val.toFixed(2)); //Can use toFixed() now
//Narrowing with Type Guards
function generate(val) {
    if (typeof age === "number")
        console.log(age.toFixed(8));
    else if (typeof age === "string")
        console.log(age.toUpperCase());
}
var age = 10;
generate(age);
age = 'abc';
generate(age);
//Objects
var teacher = {
    "first-name": "ABCDE",
    experience: "10"
};
// console.log(teacher.first-name)          //ERROR due to '-'
console.log(teacher["first-name"]); //Correct way
var keyname = "first-name";
console.log(teacher[keyname]); //Another way
var Educator = {
    name: "XYZ",
    salary: 1000
};
console.log(Educator);
