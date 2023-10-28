import inq from 'inquirer';
import { wait } from './wait.js';
import { clear } from "console";
class Student {
    name;
    id;
    CoursesEnrolled;
    balance;
    paidfees = false;
    tuitionfees = 0;
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.CoursesEnrolled = [];
        this.balance = 5000;
    }
    enroll(course) {
        if (this.CoursesEnrolled.findIndex((element, idx) => element === course[0].name) === -1) {
            this.CoursesEnrolled.push(course[0].name);
            this.tuitionfees += course[0].price;
            this.paidfees = false;
        }
        else
            console.log(`Already enrolled in ${course[0].name}!`);
    }
    ViewBalance() {
        console.log(`Balance: ${this.balance}`);
    }
    PayTuitionFees() {
        if (this.balance >= this.tuitionfees && !this.paidfees) {
            console.log(`Tuition fees of ${this.tuitionfees} has been paid!\nRemaining Balance: ${this.balance - this.tuitionfees}`);
            this.balance -= this.tuitionfees;
            this.tuitionfees = 0;
            this.paidfees = true;
        }
        else if (this.paidfees)
            console.log('Fees already paid!');
        else
            console.log(`Insufficient balance to pay tuition fees ${this.tuitionfees}!\n Current Balance: ${this.balance} `);
    }
    ShowStatus() {
        console.log(`Status\nName:\t${this.name}\nID:\t${this.id}\nCourses:\t${this.CoursesEnrolled}\nBalance:\t${this.balance}`);
    }
}
let counter = 0;
let Std = [];
Std.push(new Student("Mohammad Yehya", ++counter));
let OfferedCourses = [
    { name: 'Design & Analysis of Algorithms', price: 1000 },
    { name: 'Parallel & Distributed Computing', price: 500 },
    { name: 'Computer Networks', price: 750 }
];
while (true) {
    console.log(`Welcome ${Std[0].name}!`);
    let choice = await inq.prompt([
        {
            name: 'val',
            type: 'rawlist',
            message: 'Pick choice: ',
            choices: [
                { name: '1.Show Status', value: 1 },
                { name: '2.Enroll Course', value: 2 },
                { name: '3.View Balance', value: 3 },
                { name: '4.Pay Tuition Fees', value: 4 },
                { name: '5.Exit', value: 5 }
            ]
        }
    ]);
    switch (choice.val) {
        case 1:
            Std[0].ShowStatus();
            await wait();
            break;
        case 2:
            let c = await inq.prompt([
                {
                    name: 'val',
                    type: 'rawlist',
                    choices: OfferedCourses
                }
            ]);
            Std[0].enroll(OfferedCourses.filter((element) => { if (element.name === c.val)
                return element; }));
            await wait();
            break;
        case 3:
            Std[0].ViewBalance();
            await wait();
            break;
        case 4:
            Std[0].PayTuitionFees();
            await wait();
            break;
    }
    if (choice.val === 5)
        break;
    clear();
}
