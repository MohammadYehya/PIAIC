function func(p1, p2) {
    console.log(p1 + p2);
}
// func(22, 20);               //Error since (number, number) is not a viable overload
func(65, "A");
//OOP
class Person {
    //2
    constructor(name, age) {
        //1
        this.name = "mohammad";
        this.name = name;
        this.age = age;
    }
}
let Mohammad = new Person("Mohammad", 20);
console.log(Mohammad);
console.log(this);
console.log(Mohammad.name);
Mohammad.gender = 'Male'; //Not possible since gender is readonly
export {};
