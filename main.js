var resultsCounter = 0;
var getItems = function(objectData) {
  return objectData.items;
  //items is an array of item Objects
};
items = getItems(products);

function getItemsByBrand(items, brandName) {
  //array which will hold our brand search results
  var brandArray = [];
  for (let i = 0; i < items.length; i++) {
    //brand reseult found in lowercase
    var brandResult = items[i].product.brand.toLowerCase();
    if (brandResult.includes(brandName.toLowerCase())) {
      brandArray.push(items[i]);
      resultsCounter++;
    }
  }
  console.log("Array of " + brandName + ":");
  console.log(brandArray);

  return brandArray;
}

function getItemsByAuthor(items, authorName) {
  var authorArray = [];
  for (let i = 0; i < items.length; i++) {
    //author reseult found in lowercase
    var authorResult = items[i].product.author.name.toLowerCase();
    if (authorResult.includes(authorName.toLowerCase())) {
      authorArray.push(items[i]);
      resultsCounter++;
    }
  }
  console.log("Array of " + authorName + ":");
  console.log(authorArray);

  return authorArray;
}

function getAvailableProducts(items) {
  var availableArray = [];
  for (let i = 0; i < items.length; i++) {
    //author reseult found in lowercase
    var availableResult = items[
      i
    ].product.inventories[0].availability.toLowerCase();
    if (availableResult.includes("instock")) {
      availableArray.push(items[i]);
    }
  }
  console.log("Available items: ");
  console.log(availableArray);

  return availableArray;
}

function numOfProductItems(items) {
  console.log("Total number of products is " + items.length);
  if (items.length > 0) {
    resultsCounter++;
  }
}

function countryOfEachItem(items) {
  for (let i = 0; i < items.length; i++) {
    var country = items[i].product.country;
    var title = items[i].product.title;
    console.log(country);
  }
  if (items.length > 0) {
    resultsCounter++;
  }
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
}
function userPromptBrand() {
  var userSearchTerm = prompt("What are you searching for?");
  getItemsByBrand(items, userSearchTerm);
}
function userPromptAuthor() {
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
    "Enter the number for action to execute: 1 for number of products 2 for country of items, 3 for Total price of inventory, 4 to search for brands, 5 to search through authors 6 to search via max or min price 7 to set max and min"
  );
  switch (userSearchTerm) {
    case "1":
      numOfProductItems(items);
      break;
    case "2":
      countryOfEachItem(items);
      break;
    case "3":
      totalPriceOfAllInventory(items);
      break;
    case "4":
      userPromptBrand();
      break;
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
}

function part_5() {
  var sonyItems = getItemsByBrand(items, "sony");

  var sonyAvailableItems = getAvailableProducts(sonyItems);

  var authorAdoramaItems = getItemsByAuthor(items, "adorama camera");

  var nikonItems = getItemsByBrand(items, "nikon");

  var nikonEbayItems = getItemsByAuthor(nikonItems, "ebay");
}
userPrompt();
if (resultsCounter === 0) {
  alert("No results found!");
}
