let age = 13;
AgeCalc(age);

function AgeCalc(age)
{
    if (age < 2) console.log("They are a baby!");
    else if (age >= 2 && age < 4) console.log("They are a toddler!");
    else if (age >= 4 && age < 13) console.log("They are a kid!");
    else if (age >= 13 && age < 20) console.log("They are a teenager!");
    else if (age >= 20 && age < 65) console.log("They are an adult!");
    else if (age >= 65) console.log("They are an adult!");
}