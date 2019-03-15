console.log("Assignment3");

// Part 1: Create a function called getItems that simply returns the items array from the google product object.


var getItems = function(products) {
  var itemsOfProducts = products["items"];

  // console.log(itemsOfProducts);
  return itemsOfProducts;
}

var items = getItems(products);


// Part 2: Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.


var getItemsByBrand = function(items, brand) {

var count = 0;
var itemsByBrand = [];
var itemsByBrandArray = [];

for(var x=0; x< items.length; x++) {

  var itemBrand = items[x]["product"]["brand"];

  if(itemBrand == brand) {
    itemsByBrand.push(items[x]["product"]["title"])
    itemsByBrandArray.push(items[x]);
    count++;
  }
}


console.log(count);
console.log(itemsByBrand);
return itemsByBrandArray;

}


// getItemsByBrand(items, "Canon");


// Part 3: Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

var getItemsByAuthor = function(items, author) {

var count = 0;
var itemsByAuthor = [];
var itemsByAuthorArray = [];

for(var y=0; y< items.length; y++) {

  var itemAuthorName = items[y]["product"]["author"]["name"];

  if(itemAuthorName.toLowerCase().includes(author.toLowerCase())) {
    itemsByAuthor.push(items[y]["product"]["title"]);
    itemsByAuthorArray.push(items[y]);
    count++;
  }
}


console.log(count);
console.log(itemsByAuthor);
return itemsByAuthorArray;

}



// Part 4: Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

var getAvailableProducts = function(items) {

var count = 0;
var itemsWithAvailableInventory = [];
var itemsWithAvailableInventoryArray = [];

for(var j=0; j < items.length; j++) {

   var inventory = items[j]["product"]["inventories"];


   if(inventory[0]["availability"] == "inStock") {
    itemsWithAvailableInventory.push(items[j]["product"]["title"]);
    itemsWithAvailableInventoryArray.push(items[j]);
    count++;
   }

}

console.log(count)
console.log(itemsWithAvailableInventory);
return itemsWithAvailableInventoryArray;
}



// Part 5: Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.

// All items made by Sony.

var sonyItems = getItemsByBrand(items, "Sony");

// All items made by Sony that are available.

var sonyItems = getItemsByBrand(items, "Sony");
var availableSonyItems = getAvailableProducts(sonyItems);
console.log(availableSonyItems);

// All available items by the author "Adorama Camera"

getItemsByAuthor(items, "Adorama Camera");

// All items made by Nikon with the author eBay.

var nikonItems = getItemsByBrand(items, "Nikon");
var nikonAndEBayItems = getItemsByAuthor(nikonItems, "eBay");
console.log(nikonAndEBayItems);

// OR
console.log(getItemsByAuthor(getItemsByBrand(items, "Nikon"), "eBay"));

// Prompt the user for the search term they are looking for.

//If no results were found, let the user know.

// Option 4 selected
// var searchTerm = prompt("What are you looking for? A: Author, B: Brand, AP: Available Products");
// if(searchTerm == "A" ) {
//   var searchAuthor = prompt("Which author?");
//   if( (getItemsByAuthor(items, searchAuthor)).length == 0) {
//     console.log("Sorry we do not have what you are searching for");
//   }
// } else if (searchTerm == "B") {
//   var searchBrand = prompt("Which brand?")
//   if ( (getItemsByBrand(items, searchBrand)).length == 0) {
//     console.log("Sorry we do not have what you are searching for");
//   }
// } else if (searchTerm == "AP") {
//   getAvailableProducts(items);
// }

// Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:

// The number of product items

// The country of each item

// Total price of all inventory

// Search for one of the things above

var response = prompt("Please select one of the options: 1) The number of product items. 2) The country of each item. 3) Total price of all inventory 4) Search for one of the things above")

if(response == 1) {
  console.log(items.length);
} else if(response == 2) {

  var itemsCountriesArray = []
  for(var i=0; i<items.length; i++) {
    itemsCountries = items[i]["product"]["country"];
    itemsCountriesArray.push(itemsCountries);
  }
  console.log(itemsCountriesArray);

} else if(response == 3) {

  var total = 0;

  for(var j=0; j<items.length; j++) {
    var inventory = items[j]["product"]["inventories"];
    total = total + inventory[0]["price"];
  }

  console.log(total);
} else if(response == 4) {

  var searchTerm = prompt("What are you looking for? A: Author, B: Brand, AP: Available Products");
if(searchTerm == "A" ) {
  var searchAuthor = prompt("Which author?");
  if( (getItemsByAuthor(items, searchAuthor)).length == 0) {
    console.log("Sorry we do not have what you are searching for");
  }
} else if (searchTerm == "B") {
  var searchBrand = prompt("Which brand?")
  if ( (getItemsByBrand(items, searchBrand)).length == 0) {
    console.log("Sorry we do not have what you are searching for");
  }
} else if (searchTerm == "AP") {
  getAvailableProducts(items);
}

}

// Let the user enter in a maximum or minimum price. Only show them items that correspond.

var MinOrMax = prompt("Do you have min or max price? min or max?");
var MinPriceOrMaxPrice = prompt("What is your min/max price?");

var itemsPricesAboveMin = [];
var itemsPricesBelowMax = [];

if(MinOrMax == "min") {
for(var i=0; i<items.length; i++) {

  var inventory = items[i]["product"]["inventories"];
  var itemPrice = inventory[0]["price"];

  if(itemPrice >= MinPriceOrMaxPrice) {
    itemsPricesAboveMin.push(items[i]["product"]["title"]);
  }

}
console.log(itemsPricesAboveMin);

} else if(MinOrMax == "max") {
  for(var j=0; j<items.length; j++) {

    var inventory = items[j]["product"]["inventories"];
    var itemPrice = inventory[0]["price"];

    if(itemPrice <= MinPriceOrMaxPrice) {
      itemsPricesBelowMax.push(items[j]["product"]["title"]);
    }
  }
  console.log(itemsPricesBelowMax);
}


