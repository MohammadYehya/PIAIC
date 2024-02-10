let Invitees = ["Isaac Newton", "Albert Einstein", "Stephen Hawking"];

//Q14
Invitees.forEach(Person => console.log("Dear " + Person + ", You have been invited to dinner!"));
//Traditional Method -> for (let i = 0; i < Invitees.length; i++) console.log("Dear " + Invitees[i] + ", You have been invited to dinner!");
console.log();

//Q15
console.log(Invitees[2] + " can't make it to dinner!");
Invitees[2] = "Niels Bohr";
Invitees.forEach(Person => console.log("Dear " + Person + ", You have been invited to dinner!"));
//Treaditional Method ->for (let i = 0; i < Invitees.length; i++) console.log("Dear " + Invitees[i] + ", You have been invited to dinner!");
console.log();

//Q16
console.log("I have found a bigger table!");
Invitees.splice(0,0,"Erwin Schrödinger");
Invitees.splice(2,0,"Max Planck");
Invitees.push("James Clerk Maxwell");  //Alternative to append()
Invitees.forEach(Person => console.log("Dear " + Person + ", You have been invited to dinner!"));
//Traditional Method -> for (let i = 0; i < Invitees.length; i++) console.log("Dear " + Invitees[i] + ", You have been invited to dinner!");
console.log();

//Q17
console.log("My table won't arrive in time for dinner!");
for(let i = 2; i < Invitees.length;)
{
    let Name = Invitees.pop();
    console.log("Dear " + Name +". I apologize for the devastating news, but I can't invite you to dinner.")
}
console.log();
Invitees.forEach(Person => console.log("Dear " + Person + ", You have been invited to dinner!"));
//Traditional Method -> for (let i = 0; i < Invitees.length; i++) console.log("Dear " + Invitees[i] + ", You have been invited to dinner!");
for (let i = 0; i < 2; i++) Invitees.pop();
if(Invitees[0] == undefined) console.log("\nEmpty List!");
