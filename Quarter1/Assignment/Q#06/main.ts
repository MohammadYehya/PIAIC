let Name = "\n\tMohammad\t \n\t\tYehya\n Hayati";
console.log("Original: " + Name);

//Method#1 - Using RegEX
console.log("Method#1: " + Name.replace(/\s/g, ""));

//Method#2 - Iterative Approach
console.log("Original: " + Name);
let str: string = "";
let temp = Name.split("", Name.length);
temp.forEach(word => str += word.replace(/\s/, "").replace("\n", "").replace(" ", ""));
//Can also use traditional for loop
// for(let i = 0; i < Name.length; i++) {str += Name.charAt(i).replace(/\s/, "").replace("\n", "").replace(" ", "");}
console.log("Method#2: " + str);