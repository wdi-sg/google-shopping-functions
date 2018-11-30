// 1.) getItems(objectData)
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.
// Note all other functions (below) use the return of this function as their input.

var getItems = function(objectData) {
  return objectData.items;
}

// 2.) getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

// Test this function by searching for Sony, Canon, Nikon and Panasonic.

var getItemsByBrand = function(items, brand) {
  var array = [];
  for (var i = 0; i < items.length; i++) {
    if(items[i].product.brand === brand) {
      array.push(items[i]);
    }
  }
  return array;
}

// 3.) getItemsByAuthor(items, author)
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

// Test this function by searching for Target, CDW, eBay

var getItemsByAuthor = function(items, author) {
  var array = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name === author) {
      array.push(items[i]);
    }
  }
  return array;
}


// 4.) getAvailableProducts(items)
// input: an array of items
// returns: an array of items (that are available)
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

var getAvailableProducts = function(items) {
  var array = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === "inStock") {
      array.push(items[i]);
    }
  }
  return array;
}

