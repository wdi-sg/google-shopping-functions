
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}
// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(products));
/*
 * Define and use your functions here
 */


// 1.) getItems(objectData)
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.

function getItems(objectData) {
  return objectData.items;
}

var productsArray = getItems(products); //pass products object as argument
console.log(productsArray); // therefore productsArray = products.item Array


// 2.) getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

function getItemsByBrand(items, itemBrand) {
  var newArray = []; //blank array
  for (i = 0; i < items.length; i++) {
    if (items[i].product.brand === itemBrand) {
      newArray.push(items[i]);
    }
  }
  return newArray;
}

console.log(getItemsByBrand(productsArray, "Sony"));

// 3.) getItemsByAuthor(items, author)
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

function getItemsByAuthor(items, vendor) {
  var newArray = [];
  for (i = 0; i < items.length; i++) {
    if ((items[i].product.author.name).includes(vendor)) {
      newArray.push(items[i])
    }
  }
  return newArray
}

console.log(getItemsByAuthor(productsArray, "eBay"))


// 4.) getAvailableProducts(items)
// input: an array of items
// returns: an array of items (that are available)
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

function getAvailableProducts(items) {
  var newArray = [];
  for (i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === "inStock") {
      newArray.push(items[i]);
    }
  }
  return newArray;
}

console.log(getAvailableProducts(productsArray));

// 5.) Use your functions
// Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.
// All items made by Sony.
console.log(getItemsByBrand(productsArray, "Sony"));

// All items made by Sony that are available.
var sonyProducts = getItemsByBrand(productsArray, "Sony");
console.log(getAvailableProducts(sonyProducts));
//the functions look through an array and prints out a new array. Therefore, getAvailableProducts looks through the array of Sony Products and only show prints out the array of Available Sony Products!

// All available items by the author "Adorama Camera"
var adorama = getItemsByAuthor(productsArray, "Adorama Camera");
console.log(getAvailableProducts(adorama));
//getAvailableProducts looks through the array of Adorama vendors.


// All items made by Nikon with the author eBay.
var eBay = getItemsByAuthor(productsArray, "eBay");
console.log(getItemsByBrand(eBay, "Nikon"));
// eBay is the array of ebay vendors, therefore getItemsByBrand looks for Nikon brands within the ebay array.



