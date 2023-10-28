function CreateCar(manufacturer, Model, options : [string, string][])
{
    let Car = {manufacturer, Model, options}
    return Car;
}

let Car = CreateCar("Toyota", "Corolla", [["Color", "Blue"], ["OptionalFeatures", "Heated Seats"]]);
console.log(Car);
/*
    Can also do 
    let Car = CreateCar("Toyota", "Corolla", ["Color", "Blue"], ["OptionalFeatures", "Heated Seats"]);
    Only if the function declaration was function CreateCar(manufacturer, Model, ...options : [string, string][])
    Which is similar to the concept of Variadic Functions in C++
*/