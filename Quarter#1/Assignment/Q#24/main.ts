let x = "ABC"
console.log(x + " == ABC -> " + (x === "ABC"));
console.log(x + " == xyz -> " + (x === "xyz"));

console.log(x.toLowerCase() + " == ABC -> " + (x.toLowerCase() === "ABC"));
console.log(x.toLowerCase() + " == abc -> " + (x.toLowerCase() === "abc"));

console.log("1 > 0 -> " + (1>0));
console.log("1 > 2 -> " + (1>2));
console.log("1 < 0 -> " + (1<0));
console.log("1 < 2 -> " + (1<2));
console.log("1 >= 2 -> " + (1>=2));
console.log("0 >= 0 -> " + (0>=0));
console.log("1 <= 0 -> " + (1<=0));
console.log("0 <= 0 -> " + (0<=0));