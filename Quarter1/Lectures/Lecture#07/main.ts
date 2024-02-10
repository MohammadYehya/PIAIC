let student =
{
    name: "Mohammad",
    age: 21,
    isTeacher: false,
    MathSubject: 
    {
        marks: "100%",
        grade: "A+"
    },
    subjects: ["Math", "English"]
}

console.log(student.subjects[0])
console.log(student.MathSubject.grade)

//Inquirer
import inq from "Inquirer"
let val = await inq.prompt
([
{
    message: "Give me val1:",
    type: "number",
    name: "val1"
},
{
    message: "Give me val2:",
    type: "number",
    name: "val2"
}
])
console.log(val.val1);