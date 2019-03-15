// console.log(getItems());

// console.log(getItemsByBrand(getItems(),"canon"));

// console.log(getItemsByAuthor(getItems(),"Overstockdigital"));

// console.log(getAvailableProducts(getItems()));

/* Use your functions */

var items = products["items"];

// // 1. All items made by Sony.
var sony = getItemsByBrand(getItems(),"Sony");
console.log(sony);

// 2. All items made by Sony that are available.

var sonyAvailable = [];
getAvailableProducts(getItems());

for (var i = 0; i < availableProducts.length; i++) {
  if (availProductsDetails[i]["product"]["brand"] === "Sony") {
    sonyAvailable.push(availProductsDetails[i]["product"]["title"]);
    console.log("This item is made by Sony, and is available: " + availProductsDetails[i]["product"]["title"]);
  }
}

console.log("Summary: " + sonyAvailable);

// 3. All available items by the author "Adorama Camera"

var adoramaAvailable = [];
var adorama = getItemsByAuthor(getItems(),"Adorama Camera");

for (var i = 0; i < availableProducts.length; i++) {
  if (availProductsDetails[i]["product"]["author"]["name"] === "Adorama Camera") {
    adoramaAvailable.push(availProductsDetails[i]["product"]["title"]);
    console.log("This item is by Adorama Camera, and is available: " + availProductsDetails[i]["product"]["title"]);
  }
}

console.log(adoramaAvailable);

// 4. All items made by Nikon with the author eBay.

var nikonEbay = [];
var nikon = getItemsByBrand(getItems(),"Nikon");

for (var i = 0; i < brandItemsDetails.length; i++) {
  if (products["items"][i]["product"]["brand"] === "Nikon") {
    nikonEbay.push(brandItemsDetails[i]["product"]["title"]);
    console.log("This item a Nikon item on eBay: " + brandItemsDetails[i]["product"]["title"]);
  }
}

console.log("Summary: " + nikonEbay);

// Further 1 - Prompt the user for the search term they are looking for

// var input = prompt("📷 What are you looking for?");

// Further 2 - If no results were found, let the user know.

// else {
//   alert("Sorry! No results were found. 😢")
// }

// Further 3 – Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:

// The number of product items

// The country of each item

// Total price of all inventory

// Search for one of the things above

// var input = prompt("What would you like to see? 1. The number of product items 2. The country of each item 3. Total price of all inventory 4. Search for one of the things above")

// Further 4 – Let the user enter in a maximum or minimum price. Only show them items that correspond.

var input = prompt("Enter a maximum price.")
var productsBelowPrice = [];

showProductsBelowPrice(input);
alert(productsBelowPrice);

// Further 5 - Let the user enter in a maximum and minimum price. Only show them items that correspond.

var maxp = prompt("Enter a maximum price.");
var minp = prompt("Enter a minimum price.")

var minMaxProducts = [];
minMaxPrice(minp,maxp);
alert(minMaxProducts);









