
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  for (i in itemData.items) {
    return itemData.items.length;
  }
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(products));
// console.log(products);

//returns the items array
var getItems = function(objectName) {
  for (i in objectName.items) {
    return objectName.items;
  }
}
console.log(getItems(products));


//takes an item array returns a new array of all items of a specified brand
var getItemsByBrand = function(itemArray, brandName) {
  var results = [];
  for (i = 0; i < itemArray.length; i++) {
    if (itemArray[i].product.brand === brandName) {
      results.push(itemArray[i]);
    }
  }
  return results;
}
console.log(getItemsByBrand(getItems(products),'Nikon'));


//takes an item array and returns a new array of all items by a specified author
var getItemsByAuthor = function(itemArray, authorName) {
  var results = [];
  for (i = 0; i < itemArray.length; i++) {
     if (itemArray[i].product.author.name.includes(authorName)) {
       results.push(itemArray[i]);
     }
  }
  return results;
}
console.log(getItemsByAuthor(getItems(products), "eBay"));


//takes an item array and returns an array containing all of the available products
var getAvailableProducts = function(itemArray) {
  var results = [];
   for (i = 0; i < itemArray.length; i++) {
     if (itemArray[i].product.inventories[0].availability === "inStock") {
       results.push(itemArray[i]);
     }
   }
  return results;
}
console.log(getAvailableProducts(getItems(products)));



//outputs all Sony products
console.log(getItemsByBrand(getItems(products), "Sony"));
//outputs all available Sony products
console.log(getAvailableProducts(getItemsByBrand(getItems(products), "Sony")));
//outputs all available items by the author "Adorama Camera"
console.log(getAvailableProducts(getItemsByAuthor(getItems(products), "Adorama Camera")));
//outputs All items made by Nikon with the author eBay
console.log(getItemsByBrand(getItemsByAuthor(getItems(products), "eBay"), "Nikon"));
