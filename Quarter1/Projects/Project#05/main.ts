import inq from 'inquirer'

let choice = await inq.prompt
([{
    name: "para",
    type: "string",
    message: "Enter a paragraph: "
}])

let words = 1;
let char = 0;
for(let i = 0; i < choice.para.length ; i++)
{
    if(choice.para.at(i) == ' ') words++;
    else char++;
}
console.log(`Paragraph has ${words} words and ${char} characters.`)