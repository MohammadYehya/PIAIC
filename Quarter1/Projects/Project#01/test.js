import inq from 'inquirer';
let diff = await inq.prompt([
    {
        name: 'val',
        type: 'rawlist',
        message: 'Please select difficulty!',
        choices: [{ name: 'Easy', value: 0 }, { name: 'Medium', value: 1 }, { name: 'Hard', value: 2 }]
    }
]);
console.log(diff.val);
