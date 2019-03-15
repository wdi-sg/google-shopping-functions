// Create a function called getItems that simply returns the items array from the google product object.
var productsArray = getItems(products);
console.log(productsArray);

var brandArray = getItemsByBrand(productsArray,"Sony");

var authorArray = getItemsByAuthor(productsArray, "eBay");

var availableArray = getAvailableProducts(productsArray, "inStock");

// console.log("Create a function called by getItemsByBrand")

// var itemsArray = getItemsByBrand(products.items);
// console.log(itemsArray);

// getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)

// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
// Test this function by searching for Sony, Canon, Nikon and Panasonic.

//Products > Items > Kind > Product > Brand

// function getItemsByBrand(items, brand){

//   for (var i = 0; i < productsArray.items.kind.product.brand.length; i++){
//     if (productsArray.items.kind.product.brand === items, brand){
//     }
//   }
// }







