import inq from 'inquirer';
let currencies = [
    'PakistaniRupee',
    'USDollar',
    'PoundSterling',
    'KuwaitiDinar',
];
var c;
(function (c) {
    c[c["PakistaniRupee"] = 0] = "PakistaniRupee";
    c[c["USDollar"] = 1] = "USDollar";
    c[c["PoundSterling"] = 2] = "PoundSterling";
    c[c["KuwaitiDinar"] = 3] = "KuwaitiDinar";
})(c || (c = {}));
let convert = [
    [1, 0.0036, 0.003, 0.0011],
    [275, 1, 0.82, 0.31],
    [334.15, 1.22, 1, 0.38],
    [892.01, 3.24, 2.67, 1]
];
let curr1 = await inq.prompt([{
        name: 'val',
        message: 'Pick currency:',
        type: 'rawlist',
        choices: currencies
    }]);
let val1 = await inq.prompt([{
        name: 'amount',
        type: 'number',
        message: 'Enter amount: '
    }]);
let curr2 = await inq.prompt([{
        name: 'val',
        message: 'Pick currency:',
        type: 'rawlist',
        choices: currencies
    }]);
console.log(`${val1.amount} ${curr1.val} = ${val1.amount * convert[c[`${curr1.val}`]][c[`${curr2.val}`]]} ${curr2.val}`);
