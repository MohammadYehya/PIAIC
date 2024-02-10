function make_shirt(size, msg) {
    if (size === void 0) { size = "Large"; }
    if (msg === void 0) { msg = "I Love Typescript"; }
    console.log("Size:\t\t" + size + "\nMessage:\t" + msg);
}
make_shirt(); //Large and Default Message
make_shirt("Medium"); //Medium and Default Message
make_shirt("Medium", "I Love Programming!");
