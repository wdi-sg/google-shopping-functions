var totalNumberOfItems = function(products) {
  var totalNum = products.items.length;
  console.log("Total number of items: " + totalNum);
}

var countryOfItems = function(products) {
  console.log("The country of each item: ");
  for (i = 0; i < products.items.length; i++) {
      var country = products.items[i].product.country;
      var item = products.items[i].product.title;
      console.log("Item: " + item);
      console.log("Country: " + country);
      console.log(" ");
  }
}

var totalPriceofItems = function(products) {
  var totalPrice = 0;
  for (i = 0; i < products.items.length; i++) {
    totalPrice = totalPrice + products.items[i].product.inventories[0].price;
  }
  console.log("The total price of all the items: $" + totalPrice.toFixed(2));
}

var userInput = prompt("Enter: Total Number, Country or Total Price");

switch(userInput.toLowerCase()) {
  case "total number":
    totalNumberOfItems(products);
    break;
  case "country":
    countryOfItems(products);
    break;
  case "total price":
    totalPriceofItems(products);
    break;
  default:
    console.log("Invalid input");
    break;
}



