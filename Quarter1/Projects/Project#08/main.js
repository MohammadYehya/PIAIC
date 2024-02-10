import inq from 'inquirer';
class Question {
    q;
    ans;
    correctidx;
    constructor(q, ans, correctidx) {
        this.q = q;
        this.ans = ans;
        this.correctidx = correctidx;
    }
}
let Q = [];
Q.push(new Question("Q1.What is 1+1?", ["2", "1", "3", "0"], [0]));
Q.push(new Question("Q2.What is H2O?", ["Helium", "Water", "Sulfur Hexafloride", "Oxygen"], [1]));
Q.push(new Question("Q3.What is the integral of d(x)/dx?", ["x^2", "1", "x", "0"], [2]));
Q.push(new Question("Q4.What is the best initiative for IT in Pakistan?", ["PIAIC", "PIAIC"], [0, 1]));
Q.push(new Question("Q5.Solve for x. x^2-4=0", ["2", "1", "3", "-2"], [0, 3]));
let correct = 0;
for (let i = 0; i < Q.length; i++) {
    let marks = await inq.prompt([
        {
            name: 'ans',
            message: Q[i].q,
            type: 'rawlist',
            choices: Q[i].ans,
        }
    ]);
    let ans = Q[i].ans.filter((element) => { for (let j = 0; j < Q[i].correctidx.length; j++) {
        if (element === Q[i].ans[Q[i].correctidx[j]])
            return element;
    } });
    console.log(`${ans} was/were the correct answer(s)!`);
    if (ans.find(element => element === marks.ans) != undefined)
        correct++;
}
console.log(`You scored ${correct}/${Q.length}!`);
