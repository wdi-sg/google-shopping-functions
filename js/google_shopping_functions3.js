var userInputMin = prompt("Enter the minimum price: ");
var minPrice = Number(userInputMin);

var userInputMax = prompt("Enter the maximum price: ");
var maxPrice = Number(userInputMax);

var itemsWithCorrectPrice = function(products) {
  console.log("The items between $" + minPrice + " to $" + maxPrice + ": ");
  for (i = 0; i < products.items.length; i++) {
    var itemPrice = products.items[i].product.inventories[0].price;
    if (itemPrice >= minPrice && itemPrice <= maxPrice) {
      console.log("Item: " + products.items[i].product.title);
      console.log("Price: $" + products.items[i].product.inventories[0].price);
      console.log(" ");
    }
  }
}

itemsWithCorrectPrice(products);
