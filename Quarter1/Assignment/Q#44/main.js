function createSandwich(condiments) {
    console.log("The Sandwich includes: ");
    condiments.forEach(function (element) { return console.log("\t" + element); });
}
createSandwich(["Beef Patty", "Lettuce", "Cheese", "Tomato"]);
createSandwich(["Chicken Patty", "Cheese", "Tomato"]);
createSandwich(["Chicken Patty", "Onions"]);
