
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


// input: json object
// returns: an array of items
function getItems(objectData) {
  return objectData.items;
}
// test: getItems(products);

// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
function getItemsByBrand(items, brand) {
  results = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand === brand) {
      results = results.concat(items[i]);
    }
  }
  return results;
}
// test: getItemsByBrand(products.items,"Canon");

// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
function getItemsByAuthor(items, author) {
  results = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name === author) {
      results = results.concat(items[i]);
    }
  }
  return results;
}
// test: getItemsByAuthor(products.items, "eBay");

// Assuming possible multiple inventories
// input: an array of items
// returns: an array of items (that are available)
function getAvailableProducts(items) {
  results = [];
  for (var i = 0; i < items.length; i++) {
    var item_inventories = items[i].product.inventories;
    for (var j = 0; j < item_inventories.length; j++) {
      if (item_inventories[j].availability === "inStock") {
        results = results.concat(items[j]);
        break;
      }
    }
  }
  return results;
}
// test: getAvailableProducts(products.items);

// Assuming only 1 inventory
// function getAvailableProducts(items) {
//   results = [];
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].product.inventories[0].availability === "inStock") {
//       results = results.concat(items[i]);
//     }
//   }
//   return results;
// }