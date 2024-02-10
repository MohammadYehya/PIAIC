import inq from "inquirer";
import { Search } from "./Search.js";
import { clear } from "console";
import { wait } from "./wait.js";
let database = [["ADMIN", "NIMDA", 100000], ["Mohammad", "abc123", 2000], ["", "000", 0], ["Mohammad", "xyz789", 1000]];
let usr = await inq.prompt([
    {
        name: 'Username',
        type: 'string',
        message: 'Enter Username: '
    }
]);
Search(database, usr.Username, async (x) => {
    while (true) {
        clear();
        console.log(`Welcome ${usr.Username}!`);
        let choice = await inq.prompt([
            {
                name: 'val',
                type: 'rawlist',
                message: 'Pick a choice: ',
                choices: [
                    { name: 'Check Balance', value: 1 },
                    { name: 'Deposit Amount', value: 2 },
                    { name: 'Withdraw Amount', value: 3 },
                    { name: 'Exit', value: 4 }
                ]
            }
        ]);
        switch (choice.val) {
            case 1:
                console.log(`Balance: ${x[2]}\n`);
                await wait();
                break;
            case 2:
                let dep = await inq.prompt([
                    {
                        name: 'val',
                        type: 'number',
                        message: 'Enter deposit amount: '
                    }
                ]);
                if (!Number.isNaN(dep.val) && dep.val > 0) {
                    x[2] += dep.val;
                    console.log(`${dep.val} amount deposited!\n`);
                    await wait();
                }
                break;
            case 3:
                let wit = await inq.prompt([
                    {
                        name: 'val',
                        type: 'number',
                        message: 'Enter withdraw amount: '
                    }
                ]);
                if (x[2] >= wit.val && wit.val > 0) {
                    x[2] -= wit.val;
                    console.log(`${wit.val} amount withdrawn!\n`);
                }
                else
                    console.log(`Not enough balance in account!\n`);
                await wait();
                break;
        }
        if (choice.val === 4)
            break;
    }
    clear();
    console.log(`Thank you!`);
});
