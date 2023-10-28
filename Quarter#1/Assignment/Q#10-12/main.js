//Explicit
var Names = ["Mohammad", "Ali", "Hamza"];
//Implicit
var Names2 = ["Mohammad", "Ali", "Hamza"];
//Iterating through the array to print names - Q11
for (var i = 0; i < Names.length; i++)
    console.log(Names[i]);
console.log();
//Q12
Names.forEach(function (word) { return console.log("Hey " + word + "! How are you doing?"); });
//Can also use traditional for loop
// for (let i = 0; i < Names.length; i++) console.log("Hey " + Names[i] + "! How are you doing?");
