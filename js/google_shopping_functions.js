
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

//Part 1
//Creates a function getItems that returns the items array from the google product object.
var getItems = function(objectData) {
//  console.log(products.items);
  return products.items;
}

//Part 2
//Creates a function getItemsByBrand that takes an item array and returns a new array of all items of a specified brand.
var items = products.items;

var getItemsByBrand = function(items, brand) {
  var brandArray =[];
  for (i=0; i<items.length; i++) {
    var inputBrand = items[i].product.brand;
    if (inputBrand.toLowerCase() === brand.toLowerCase()) {
      brandArray.push(items[i]);
    }
  }

//  console.log(brandArray);
  return brandArray;
}

//Part 3
//Creates a function getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
var getItemsByAuthor = function(items, author) {
  var authorArray =[];
  for (i=0; i<items.length; i++) {
    var inputAuthor = items[i].product.author.name;
    if (inputAuthor.toLowerCase().includes(author.toLowerCase())) {
      authorArray.push(items[i]);
    }
  }

//  console.log(authorArray);
  return authorArray;
}

//Part 4
//Creates a function getAvailableProducts that takes an item array and returns an array of "inStock" products.
var getAvailableProducts = function(items) {
  var inStockArray = [];
  var items = products.items;
  for ( i=0; i < items.length; i++) {
    var availability = items[i].product.inventories[0].availability;
    if (availability === "inStock") {
      inStockArray.push(items[i]);
    }
  }

//  console.log(inStockArray);
  return inStockArray;
}

//Part 5
//Putting the functions to use!

//Output: all items by Sony.
console.log(getItemsByBrand(items, "sony"));

//Output: all items by Sony that are available.
console.log(getItemsByBrand(getAvailableProducts(items), "sony"));

//Output: all available items by the author "Adorama Camera"
console.log(getItemsByAuthor(getAvailableProducts(items), "adorama camera"));

//Output: all items made by Nikon with the author eBay
console.log(getItemsByBrand(getItemsByAuthor(items, "ebay"), "nikon"));


// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));


