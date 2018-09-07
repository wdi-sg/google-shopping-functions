
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(products));




// Create a function called getItems that simply returns the items array from the google product object.
// input: json object
// returns: an array of items
var getItems = function (objectData) {
  return objectData.items;
};

// Create a function called getItemsByBrand that takes an item array returns a new array of
// all items of a specified brand.
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Test this function by searching for Sony, Canon, Nikon and Panasonic.
var getItemsByBrand = function (items, brand) {
  var foundBrands = [];
  for (var i = 0; i < getItemsCount(items); i++) {
    if (items.items[i].product.brand === brand) {
      foundBrands.push(items.items[i].product);
    }
  }
  return foundBrands;
};

// Create a function called getItemsByAuthor that takes an item array and returns a new array
// of all items by a specified author.
// Test this function by searching for Target, CDW, eBay
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
var getItemsByAuthor = function (items, author) {
  var foundAuthor = [];
  for (var i = 0; i < getItemsCount(items); i++) {
    if (items[i].product.author.name === author) {
      foundBrands.push(items[i]);
    }
  }
};

// Create function called getAvailableProducts that takes an item array and returns an array containing all of the
// available products (an available product is one with at least one availability of "inStock" in the inventories array)
// input: an array of items
// returns: an array of items (that are available)
var getAvailableProducts = function (items) {

};


