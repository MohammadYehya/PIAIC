import inq from 'inquirer';
import clk from 'chalk';
import {SUM} from "./Addition.js";
import {SUB} from "./Subtraction.js";
import {MUL} from "./Multiplication.js"
import {DIV} from "./Division.js"
function EmptyFunc(val1:number, val2:number){return 0;}
let PointerToFunction: ((val1: number, val2: number) => number)[] = [MUL,SUM,EmptyFunc,SUB,EmptyFunc,DIV];
let choice;
do
{
    let answer = await inq.prompt
    ([
        {
            name: 'val1',
            type: 'number',
            message: 'Enter first number: '
        },
        {
            name: 'val2',
            type: 'number',
            message: 'Enter second number: '
        },
        {
            name: 'op',
            type: 'list',
            choices: ["*","+","-","/"],
            message: "Pick Operation: "
        }
    ]);
    console.log(clk.blue.bold(answer.val1 + ' ' + clk.red(answer.op) + ' ' + answer.val2 + ' = ' + clk.greenBright.bold(PointerToFunction[answer.op.charCodeAt(0)%42](answer.val1,answer.val2))));
    choice = await inq.prompt
    ([
        {
            name: 'val',
            type: 'list',
            message: 'Do you want to keep calculating?',
            choices: ['Y','N'],
        }
    ])
} while(choice.val==='Y');