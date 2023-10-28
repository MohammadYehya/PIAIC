console.dir(document);//If you inspect element on website, you can see this document in console tab
//can use console.log as well

//JS is used to manipulate HTML to make interactive
//To do this we need to use the document object {known as DOM{we will do DOM manipulation}}

const para = document.createElement("p");
para.textContent = "This is Javascript!";
document.body.append(para);
//To add one line we need to add 3 lines of JS Code
//This is not a good method, thus we will use a framework called <next.js> to resolve this