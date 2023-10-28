function abc(pqr : number)
{
    console.log(pqr);
    return pqr / 10;
}

// let result = abc(100);

if(abc(100) > 15) console.log("2 Shoppers");
else console.log("1 Shopper")




let num : number = 197
//TASK - Ali

function isEvenOROdd(input : number)
{
 if (input % 2 === 0)
{ 
 console.log("number is even")
}
 else 
{
    console.log("number is odd")
}
}
isEvenOROdd(num);

//TASK - Mohammad

function isEvenOrOdd(num : number)
{
    console.log(`${num} is %s`,(num%2)?"odd":"even");
}
isEvenOrOdd(num)

for(let i = 0; i < 10; i++)
{
    console.log(`Yo Wassup ${i}`);
}