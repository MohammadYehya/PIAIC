var current_users = ["Mohammad", "Ali", "Qasim", "Hamza", "Bilal"];
var new_users = ["Saad", "Ali", "Ahmed", "Taha", "HAMZA"];
new_users.forEach(function (nuser) {
    var flag = false;
    current_users.forEach(function (cuser) {
        if (nuser.toLowerCase() == cuser.toLowerCase() && !flag) {
            console.log("Username: " + nuser + " already in use. Please enter a new username");
            flag = true;
        }
    });
    if (!flag)
        console.log("Username: " + nuser + " available!");
});
