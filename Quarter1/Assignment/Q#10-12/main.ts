//Explicit
let Names: string[] = ["Mohammad", "Ali", "Hamza"];

//Implicit
let Names2 = ["Mohammad", "Ali", "Hamza"];

//Iterating through the array to print names - Q11
for (let i = 0; i < Names.length; i++) console.log(Names[i]);
console.log();

//Q12
Names.forEach(word => console.log("Hey " + word + "! How are you doing?"));
//Can also use traditional for loop
// for (let i = 0; i < Names.length; i++) console.log("Hey " + Names[i] + "! How are you doing?");