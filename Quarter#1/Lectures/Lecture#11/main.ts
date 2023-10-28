//Rest Parameters in Functions
let restparam = (name: string, ...name1:string[]) => 
{
    console.log(name, ...name1);
};
restparam('Hello','hi','wassaup');

//Variable Length Sum
function sum(n1:number , ...n2:number[]) : number
{
    if(n2.length === 0) return n1;
    return n1 + sum(<number>(n2.shift()), ...n2);
}
console.log(sum(1,2,3));
console.log(sum(10,15,20,25,30));
console.log(sum(44));

//Asynchronous JS
console.log("First");
// setTimeout(() => {console.log('Second')}, 3000);
console.log("Third");


let orderPizza = () => 
{
    setTimeout(() => {return "Your pizza is ready!"}, 5000);    //Major Error, return is undefined as return has to wait for 5 sec
}
// console.log(orderPizza());

//Correction using callback functions
let orderPizza1 = (cb:()=>void) =>
{
    setTimeout(() => {cb()}, 5000);
}
let BellRing = () =>
{
    console.log("Your pizza is ready!")
}
// orderPizza1(BellRing);

//Implementing Error Handling
let orderPizza2 = (cb:()=>void, cb2:()=>void) =>
{
    let isburnt = (Math.random()) < 0.2;
    setTimeout(()=>
    {
        if(isburnt) cb2();
        else cb();
    }, 5000);
}
let errorHandle = () =>
{
    console.log("Something went wrong!");
}
// orderPizza2(BellRing, errorHandle);

//Promises
let orderPizza3 = () =>
{
    return new Promise((resolve, reject) => 
    {
        let isBurnt = Math.random() < 0.4;
        setTimeout(()=>
        {
            if(isBurnt) reject("Something went wrong!");
            else resolve("Your Pizza is Ready!")
        }, 5000);
    });
}
orderPizza3()
.then((str)=>{console.log(str)})
.catch((str)=>{console.log(str)})

//Async Await - To use Async await the function needs to be returning a Promise
let getOrder = async () => 
{
    try
    {
        const value = await orderPizza3();
        console.log(value);
    }
    catch(err)
    {
        console.log(err);
    }
}
// getOrder();