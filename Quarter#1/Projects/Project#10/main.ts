import inq from 'inquirer';
class Person
{
    personality !: string;

    constructor()
    {
        this.personality = 'Mystery';
    }
    AskQuestion(answer : number)
    {
        if(answer == 1) this.personality = 'Extrovert';
        else if(answer == 2) this.personality = 'Introvert';
    }

    GetPersonality()
    {
        return this.personality;
    }
}

class Student extends Person
{
    _name!: string;
    getName()
    {return this._name;}
    setName(name: string)
    {this._name = name;}

}

let input = await inq.prompt
([
    {
        message: 'Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: ',
        name: 'val',
        type: 'number'
    }
])
let MyPerson = new Person();
MyPerson.AskQuestion(input.val);
console.log('You are : ' + MyPerson.GetPersonality());
input = await inq.prompt
([
    {
        message: 'What is your name: ',
        name: 'val',
        type: 'string'
    }
])
let MyStudent = new Student;
MyStudent.setName(input.val)
console.log('Your name is ' + MyStudent.getName() + ' and your personality is ' + MyStudent.GetPersonality());