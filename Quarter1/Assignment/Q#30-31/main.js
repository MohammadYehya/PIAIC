var users = ["Mohammad", "Ali", "Admin", "Hamza", "Bilal"];
//Q30
users.forEach(function (user) {
    if (user === "Admin")
        console.log("Hello Admin, would you like to see a status report?");
    else
        console.log("Hello " + user + ", thank you for logging in again.");
});
console.log();
//Q31
users = [];
if (users[0] == undefined)
    console.log("We need to find some users!");
else
    users.forEach(function (user) {
        if (user === "Admin")
            console.log("Hello Admin, would you like to see a status report?");
        else
            console.log("Hello " + user + ", thank you for logging in again.");
    });
