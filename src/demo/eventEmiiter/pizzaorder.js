const EventEmiiter = require("node:events");
class PizzaShop extends EventEmiiter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  displayOrder() {
    console.log(`current order number ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
