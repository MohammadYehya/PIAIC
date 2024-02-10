function createSandwich(condiments)
{
    console.log("The Sandwich includes: ")
    condiments.forEach(element => console.log("\t"+element));
}

createSandwich(["Beef Patty", "Lettuce", "Cheese", "Tomato"]);
createSandwich(["Chicken Patty", "Cheese", "Tomato"]);
createSandwich(["Chicken Patty", "Onions"]);