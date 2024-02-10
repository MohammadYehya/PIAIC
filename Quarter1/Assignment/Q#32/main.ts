let current_users = ["Mohammad", "Ali", "Qasim", "Hamza", "Bilal"];
let new_users = ["Saad" , "Ali", "Ahmed", "Taha", "HAMZA"];

new_users.forEach(nuser => 
{
    let flag = false;
    current_users.forEach(cuser => 
    {
        if (nuser.toLowerCase() == cuser.toLowerCase() && !flag) 
        {
            console.log("Username: " + nuser + " already in use. Please enter a new username");
            flag = true;
        }
    })
    if (!flag) console.log("Username: " + nuser + " available!");
})