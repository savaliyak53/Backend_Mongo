const DrinkOrder = require("./drinkOrder");
const PizzaShop = require("./pizzaorder");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkOrder();

pizzaShop.on("order", (size, topping) => {
  console.log("========", size, topping, "=============");
  drinkMachine.serverDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrder();
