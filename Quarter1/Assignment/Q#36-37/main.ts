function make_shirt(size: string = "Large", msg: string = "I Love Typescript")
{
    console.log("Size:\t\t" + size + "\nMessage:\t" + msg);
}


make_shirt();           //Large and Default Message
make_shirt("Medium");   //Medium and Default Message
make_shirt("Medium", "I Love Programming!");