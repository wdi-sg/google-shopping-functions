
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

 /**
function getItemsCount(itemData) {
  return itemData.items.length;
}**/

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));

// Part 1: Create a function called getItems that simply returns the items array from the google product object.

var getItems = function() {
  return products.items;
}
var result = getItems();

//Part 2: input: an array of items, a string of a brand to filter with
//returns: an array of items (of a specific brand)
//Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

var getItemsByBrand = function(result,brandChoice) {
  var brandItems = [];
    for (var i= 0; i < result.length; i++) {
    if (result[i].product.brand===brandChoice) {
    brandItems.push(result[i]);
    }
  }
  return brandItems;
}

/**
var brandChoice;
var result2 = getItemsByBrand(brandChoice);
console.log(result2);
**/

//Part 3:
/**
getItemsByAuthor(items, author)
input: an array of items, a string of an author to filter with
returns: an array of items (of a specific author)
Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author
**/

var getItemsByAuthor = function(result, authorChoice) {
  var authorItems = [];
    for (var i= 0; i < result.length; i++) {
    if (result[i].product.author.name.toLowerCase().includes(authorChoice)) {
    authorItems.push(result[i]);
    }
  }
  return authorItems;
}

//part 4

//input: an array of items
//returns: an array of items (that are available)
//Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

var getAvailableProducts = function(result, avail) {
  var availItems = [];
    for (var i= 0; i < result.length; i++) {
    if (result[i].product.inventories[0].availability.toLowerCase()===avail) {
    availItems.push(result[i]);
    }
  }
  return availItems;
}

//Part 5


//Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.

//All items made by Sony.


var sonyItems = getItemsByBrand(result,'Sony');
console.log(sonyItems);


var availSony = getAvailableProducts(result, "instock");
console.log(availSony);



//var availSony = getAvailableProducts((getItemsByBrand('Sony')), "instock");

/**
var getAvailableSony = function(avail) {
  var availItems = [];
    for (var i= 0; i < result.length; i++) {
    if (getItemsByBrand('Sony')[i].product.inventories[0].availability.toLowerCase()===avail) {
    availItems.push(getItemsByBrand('Sony')[i].product);
    }
  }
  return availItems;
}

var availSony = getAvailableSony("instock");
**/
console.log(getAvailableProducts((getItemsByBrand(result,'Sony')), "instock"));

/**
var getAvailableSony = function() {
  var availSony = [];
    for (var i= 0; i < result.length; i++) {
    if (sonyItems.product.inventories[0].availability.toLowerCase()==="instock") {
    availSony.push(result[i].product);
    }
  }
  return availSony;
}
**/

//All available items by the author "Adorama Camera"

console.log(getItemsByAuthor(result,"adorama camera"));

//All items made by Nikon with the author eBay.

console.log(getItemsByBrand((getItemsByAuthor(result,"ebay")), "Nikon"));
/**
remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.

** Example Function Usage**

//verbose -- outputs all cannon products
var items = getItems(data);
var cannonItems = getItemsByBrand(items, 'Cannon');
console.log(cannonItems);

//single line version -- does the same as above
console.log(getItemsByBrand(getItems(data), 'Cannon'));
**/

//var items = getItems();

//Further: Prompt the user for the search term they are looking for.

//Further: If no results were found, let the user know.

/** Further:
Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:

The number of product items

The country of each item

Total price of all inventory

Search for one of the things above

**/

//Further: Let the user enter in a maximum or minimum price. Only show them items that correspond.

//Further: Let the user enter in a maximum and minimum price. Only show them items that correspond.

