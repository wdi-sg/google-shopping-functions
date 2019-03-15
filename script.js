}

function totalPriceOfAllInventory(items) {
    var totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        var price = items[i].product.inventories[0].price;
        totalPrice = totalPrice + price;
    }
    if (items.length > 0) {
        resultsCounter++;
    }
    console.log("Total prie of all inventory is " + totalPrice);
  var totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    var price = items[i].product.inventories[0].price;
    totalPrice = totalPrice + price;
  }
  if (items.length > 0) {
    resultsCounter++;
  }
  console.log("Total prie of all inventory is " + totalPrice);
}
function userPromptBrand() {
  var userSearchTerm = prompt("What are you searching for?");
@@ -92,10 +92,53 @@ function userPromptAuthor() {
  var userSearchTerm = prompt("What are you searching for?");
  getItemsByAuthor(items, userSearchTerm);
}
function maximumOrMinimum() {
  var maxOrMin = prompt(
    "Enter '1' to set a maximum price or '2' for minimum price"
  );
  var maxMinArray = [];
  if (maxOrMin === "1") {
    var maxPrice = prompt("Enter max price");
    for (let i = 0; i < items.length; i++) {
      //author reseult found in lowercase
      var price = items[i].product.inventories[0].price;
      if (price <= maxPrice) {
        maxMinArray.push(items[i]);
        resultsCounter++;
      }
    }
  } else if (maxOrMin === "2") {
    var minPrice = prompt("Enter min price");
    for (let i = 0; i < items.length; i++) {
      //author reseult found in lowercase
      var price = items[i].product.inventories[0].price;
      if (price >= minPrice) {
        maxMinArray.push(items[i]);
        resultsCounter++;
      }
    }
  }
  console.log(maxMinArray);
}
function maximumAndMinimum() {
  var maxPrice = prompt("Enter max price");
  var minPrice = prompt("Enter min price");
  var maxMinArray = [];
  for (let i = 0; i < items.length; i++) {
    //author reseult found in lowercase
    var price = items[i].product.inventories[0].price;
    if (price <= maxPrice && price >= minPrice) {
      maxMinArray.push(items[i]);
      resultsCounter++;
    }
  }

  console.log(maxMinArray);
}

function userPrompt() {
  var userSearchTerm = prompt(
    "Enter the number for action to execute: 1 for number of products 2 for country of items 3 for Total price of inventory 4 to search for brands and 5 to search through authors"
    "Enter the number for action to execute: 1 for number of products 2 for country of items, 3 for Total price of inventory, 4 to search for brands, 5 to search through authors 6 to search via max or min price "
  );
  switch (userSearchTerm) {
    case "1":
@@ -113,6 +156,12 @@ function userPrompt() {
    case "5":
      userPromptAuthor();
      break;
    case "6":
      maximumOrMinimum();
      break;
    case "7":
      maximumAndMinimum();
      break;
    default:
      break;
  }
