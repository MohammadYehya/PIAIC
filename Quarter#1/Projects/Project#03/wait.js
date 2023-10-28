import inq from "inquirer";
export async function wait() {
    let cont = await inq.prompt([
        {
            name: 'val',
            type: 'string',
            message: 'Press any key to continue...'
        }
    ]);
}
