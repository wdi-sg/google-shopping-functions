// REMEMBER: data should be passed in to the function as arguments and out as a return value.
// DO NOT access/modify variables defined outside of the function.

// 1.) getItems(objectData)
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.

function getItems (itemData) {
  return itemData.items;
}

// 2.) getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//
// Test this function by searching for Sony, Canon, Nikon and Panasonic.

function getItemsByBrand (items, brandName) {

  var brandArray = [];

  for (var i = 0; i < items.length; i++) {

    if (items[i].product.brand.toLowerCase() === brandName.toLowerCase() ) {

      brandArray.push(items[i]);

    }
  }
  return brandArray;
}

// 3.) getItemsByAuthor(items, author)
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
//
// Test this function by searching for Target, CDW, eBay

function getItemsByAuthor (items, author) {

  var authorArray = [];

  for (var i = 0; i < items.length; i++) {

    if (items[i].product.author.name.toLowerCase().includes(author.toLowerCase())) {

      authorArray.push(items[i]);

    }
  }
  return authorArray;
}

// 4.) getAvailableProducts(items)
// input: an array of items
// returns: an array of items (that are available)
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products
// (an available product is one with at least one availability of "inStock" in the inventories array)

function getAvailableProducts (items) {

  var availableArray = [];

  for (var i = 0; i < items.length; i++) {

    if (items[i].product.inventories[0].availability.includes("inStock")) {

      availableArray.push(items[i]);

    }
  }
  return availableArray;
}

// a.The number of product items

function totalItems (items) {
  return items.length;
}

// b.The country of each item

function itemCountries (items) {

  var countries = [];

  for (var i = 0; i < items.length; i++) {
    countries.push(items[i].product.country);
  }

  return countries;
}

// c.Total price of all inventory

function totalInvPrice (items) {

  var sum = 0

  for (var i = 0; i < items.length; i++) {
    sum += items[i].product.inventories[0].price;
  }

  return sum;
}

// d.Search for one of the things above








