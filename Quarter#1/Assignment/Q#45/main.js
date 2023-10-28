function CreateCar(manufacturer, Model, options) {
    var Car = { manufacturer: manufacturer, Model: Model, options: options };
    return Car;
}
var Car = CreateCar("Toyota", "Corolla", [["Color", "Blue"], ["OptionalFeatures", "Heated Seats"]]);
console.log(Car);
/*
    Can also do
    let Car = CreateCar("Toyota", "Corolla", ["Color", "Blue"], ["OptionalFeatures", "Heated Seats"]);
    Only if the function declaration was function CreateCar(manufacturer, Model, ...options : [string, string][])
    Which is similar to the concept of Variadic Functions in C++
*/ 
