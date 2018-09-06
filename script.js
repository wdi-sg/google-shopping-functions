
var itemArray = getItem(products);

console.log(itemArray);

// Finding which items are of the brand "Canon"
var brandArray = getItemsByBrand(itemArray, "Canon");


// Printing out array of items which have the brand "Canon"
console.log(brandArray);

// Creating array of items whose items are on eBay
var authorArray = getItemsByAuthor(itemArray, "eBay");

console.log(authorArray);

// Creating array of items which are availability = inStock
var availableArray = getAvailableProducts(itemArray);

console.log(availableArray);


// Part 5.1 - Using functions to output all items made by Sony
var sonyArray = getItemsByBrand(itemArray, "Sony");

console.log(sonyArray);

// Part 5.2 - All items made by sory and that are available
var sonyInStockArray = getAvailableProducts(sonyArray);

console.log(sonyInStockArray);

// Part 5.3 - All available items made by author "Adorama Camera"
var adoramaArray = getAvailableProducts(itemArray);
var adoramaInStockArray = getItemsByAuthor(adoramaArray, "Adorama Camera");

console.log(adoramaInStockArray);

// Part 5.4 - All items made by Nikon with author Ebay
var nikonArray = getItemsByBrand(itemArray, "Nikon");
var nikonEbayArray = getItemsByAuthor(nikonArray, "eBay");

console.log(nikonEbayArray);


// Further - prompting user for the search term they are looking for
var brandPrompt = prompt("What brand are you looking for? e.g. Sony, Canon, Nikon etc.");

// Searching for items with brand name inputted by user
var searchTermArray = getItemsByBrand(itemArray, brandPrompt);

if ( searchTermArray.length < 1) {

// if there are no items, alert user that no results were found
  alert("No results were found.");
}

// If there are items, print out array
else  {console.log(searchTermArray);
}

var lastQn = prompt("What would you like to do? Type 1, 2, 3 or 4. \n 1. The number of product items \n 2. The country of each item \n 3. Total price of all inventory \n 4. Search for one of the things above");


if ( lastQn == 1 ) {
  further1();

// Listing out the country of each item
} else if ( lastQn == 2 ) {
  further2();

// Finding total price of all inventory even if not in stock
} else if ( lastQn == 3 ) {
  further3();


// Create a random number 1-3 for options 1-3
} else if ( lastQn == 4 ) {
  var randomNum = Math.floor((Math.random() * 3) + 1);
  if (randomNum == 1){
    further1();
  } else if ( randomNum == 2 ) {
    further2();
  } else if ( randomNum == 3 ) {
    further3();
  }
  }















