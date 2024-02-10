var Places = ["Saudi Arabia", "France", "Turkey", "United Kingdom", "Poland"];
//Original
console.log("Original: ");
Places.forEach(function (Place) { return console.log("\t" + Place); });
Places.map(function (temp) { console.log(temp); });
console.log();
/*
//Alphabetical Order
console.log("Alphabetical Order:");
Alpha_Rev(Places);
console.log("Original: ");
Places.forEach(Place => console.log("\t"+Place));
console.log();

//Reverse Alphabetical Order
console.log("Reverse Alphabetical Order:");
Alpha_Rev(Places, true);
console.log("Original: ");
Places.forEach(Place => console.log("\t"+Place));
console.log();

//Reverse Order
console.log("Reverse Order:");
Alpha_Rev(Places, true, false);
console.log("Original: ");
Places.forEach(Place => console.log("\t"+Place));
console.log();

//Reverse Array
console.log("Reverse Array:");
Places.reverse().forEach(Place => console.log("\t"+Place));
console.log();

//Reverse Array 2nd time
console.log("Reverse Array 2nd time:");
Places.reverse().forEach(Place => console.log("\t"+Place));
console.log();

//Sort Array
console.log("Sort Array:");
Places.sort();
Places.forEach(Place => console.log("\t"+Place));
console.log();

//Sort Reverse Array
console.log("Sort Reverse Array:");
Places.reverse().forEach(Place => console.log("\t"+Place));

function Alpha_Rev(Place : string[], Rev : boolean = false, Alpha : boolean = true)
{
    let temp : string[] = []
    Place.forEach(Place => temp.push(Place));
    if(Alpha) temp.sort();
    if(!Rev)temp.forEach(Place => console.log("\t"+Place));
    else temp.reverse().forEach(Place => console.log("\t"+Place));
}
*/ 
