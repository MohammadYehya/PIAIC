/*
class Person
{
    val: number;
    public changeValbyRef(num: number){this.val = num;}
    constructor(num: number){this.val = num;}
}

let p = new Person(10);
console.log(p.val);

p.changeValbyRef(15);
console.log(p.val);

p.changeValbyRef(99);
console.log(p.val);

//---------------------------------------------------------------------------------------------*/
var places = [
    "japan",
    "canada",
    "USA"
];
// function copy(arr : string[])
// {
//     let temp : string[] = []
//     arr.forEach((element, index) => {temp[index] = element;});
//     return temp;
// }
//
//          A
//          |    They are equivalent
//          V
//
//places.map(x=>x).sort()       OR        places.concat().sort()
console.log(places);
console.log(places.concat().sort());
// console.log(places.map(x=>x).sort());
console.log(places);
