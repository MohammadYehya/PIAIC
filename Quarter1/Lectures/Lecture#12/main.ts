//Function Overloading
function func(p1: string, p2: string): string;
function func(p1: number, p2: string): string;
function func(p1: any, p2: any) : any
{
    console.log(p1 + p2);
}
// func(22, 20);               //Error since (number, number) is not a viable overload
func(65, "A");

//OOP
class Person
{
    //1
    name: string = "mohammad"
    age !: number;              //To avoid initializing an attribute, add an ! before colon

    //2
    constructor(name: string, age : number)
    {
        this.name = name;
        this.age = age;
    }

    //3
    readonly gender !: string;
}
let Mohammad = new Person("Mohammad", 20);
console.log(Mohammad);

console.log(this);
console.log(Mohammad.name);

Mohammad.gender = 'Male'            //Not possible since gender is readonly