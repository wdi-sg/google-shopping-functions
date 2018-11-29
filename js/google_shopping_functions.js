
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


//Part 2: input: an array of items, a string of a brand to filter with
//returns: an array of items (of a specific brand)
//Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

var getItemsByBrand = function() {
  var brandItems = [];
    for (var i= 0; i < result.length; i++) {
    if (result[i].product.brand.toLowerCase()===brandChoice) {
    brandItems.push(result[i].product);
    }
  }
  return brandItems;
}

//Part 3:
/**
getItemsByAuthor(items, author)
input: an array of items, a string of an author to filter with
returns: an array of items (of a specific author)
Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author
**/

var getItemsByAuthor = function() {
  var authorItems = [];
    for (var i= 0; i < result.length; i++) {
    if (result[i].product.author.name.toLowerCase().includes(authorChoice)) {
    authorItems.push(result[i].product);
    }
  }
  return authorItems;
}

//part 4

//input: an array of items
//returns: an array of items (that are available)
//Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

var getAvailableProducts = function() {
  var availItems = [];
    for (var i= 0; i < result.length; i++) {
    if (result[i].product.inventories[0].availability.toLowerCase()==="instock") {
    availItems.push(result[i].product);
    }
  }
  return availItems;
}

//Part 5

/**
Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.

All items made by Sony.

All items made by Sony that are available.

All available items by the author "Adorama Camera"

All items made by Nikon with the author eBay.

remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.

** Example Function Usage**

//verbose -- outputs all cannon products
var items = getItems(data);
var cannonItems = getItemsByBrand(items, 'Cannon');
console.log(cannonItems);

//single line version -- does the same as above
console.log(getItemsByBrand(getItems(data), 'Cannon'));
**/

var items = getItems();
var cannonItems = getItemsByBrand(items, 'Canon');
console.log(cannonItems);

