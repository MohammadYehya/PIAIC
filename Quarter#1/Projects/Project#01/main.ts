import inq from "inquirer";
import chalk from "chalk";
import {clear} from "console";

let again;
do
{
    clear();
    let tries = 10;
    let guess;
    let choice;
    let diff = await inq.prompt
    ([
        {
            name: 'val',
            type: 'rawlist',
            message: 'Please select difficulty!',
            choices: 
            [
                {name:chalk.green.bold('Easy'),value:1},
                {name:chalk.hex('#FFA500').bold('Medium'),value:2},
                {name:chalk.redBright.bold('Hard'),value:3},
                {name:chalk.hex('#800080').bold('Impossible'),value:4}
            ]
        }
    ])
    let range = 10**diff.val;
    let num = Math.floor(Math.random()*range) + 1;
    while(tries)
    {
        let guess = await inq.prompt
        ([
            {
                message: `Guess the Number between 1 & ${range}: `,
                name: 'val',
                type: 'number'
            }
        ]);
        clear();
        if(num != guess.val)
        {
            console.log(`Incorrect Guess! You have ${tries-1} left!`);
            if(guess.val > num) console.log("Guess Lower!");
            else console.log("Guess Higher!");
        }
        else
        {
            console.log(chalk.greenBright.bold(`Correct Guess! The answer was ${num}!`));
            break;
        }
        tries--;
    }
    if(!tries) console.log(chalk.redBright.bold(`You Lost! The answer was ${num}! Better Luck Next Time!`)) ;
    else console.log("Congratulations! You Won!"); 
    again = await inq.prompt
    ([
        {
            message: "Do you want to play again(Y/N)?",
            name: 'val',
            type: 'list',
            choices: ['Y','N']
        }
    ]);
}
while(again.val === 'Y');
clear();
console.log("Thank You For Playing!");