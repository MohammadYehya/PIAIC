import inq from "inquirer"
import {wait} from "./wait.js";
import {clear} from "console"

let title: string[] = ['Exit'];
let content: string[] = ['Exit'];
while(true)
{
    clear();
    console.log(`\tTODO LIST\n`);
    let choice = await inq.prompt
    ([
        {
            name: 'val',
            type: 'rawlist',
            message: 'Pick a choice: ',
            choices:
            [
                {name: 'Create new', value: 1},
                {name: 'Read Existing', value: 2},
                {name: 'Delete Existing', value: 3},
                {name: 'Exit', value: 4}
            ]
        }
    ]);
    switch(choice.val)
    {
        case 1:
            let newTodo = await inq.prompt
            ([
                {
                    name: 'title',
                    type: 'string',
                    message: 'Enter Title: '
                },
                {
                    name: 'content',
                    type: 'string',
                    message: 'Content: '
                }
            ])
            title.unshift(newTodo.title);
            content.unshift(newTodo.content)
            console.log("New ToDo created!\n");
            //Write to File
            await wait();
            break;
        case 2:
            let choice = await inq.prompt
            ([
                {
                    name: 'val',
                    type: 'rawlist',
                    message: 'Available Lists:',
                    choices: title
                }
            ])
            if(choice.val != 'Exit')
            {
                title.forEach((element, index) => {
                    if(element === choice.val) {console.log(content[index]); return;}
                })
                await wait();
            }
            break;
        case 3:
            let del = await inq.prompt
            ([
                {
                    name: 'val',
                    type: 'rawlist',
                    message: 'Select List:',
                    choices: title
                }
            ])
            if(del.val != 'Exit')
            {
                title.forEach((element, index) => {
                    if(element === del.val) {title.splice(index, 1); return;}
                })
                console.log("ToDo deleted!\n");
                await wait();
            }
            break;
    }
    if(choice.val === 4) break;
}