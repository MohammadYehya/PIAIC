import inq from "inquirer";
export async function Search(database, Username, func) {
    let flagusr = 0;
    let flagps, _p;
    for (let i = 0; i < database.length; i++) {
        let element = database[i];
        if (element[0] === Username) {
            flagps = 0;
            if (!flagusr) {
                let pass = await inq.prompt([
                    {
                        name: 'Password',
                        type: 'string',
                        message: 'Enter Password: '
                    }
                ]);
                _p = pass.Password;
            }
            flagusr = 1;
            if (element[1] === _p) {
                flagps = 1;
                func(element);
                break;
            }
        }
    }
    if (!flagusr)
        console.log(`Username ${Username} Doesn't Exist!\n`);
    else if (!flagps)
        console.log("Invalid Password!\n");
}
