
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
//function getItemsCount(itemData) {
//  return itemData.items.length;
// }

/*
 * Define and use your functions here
 */

 //1) Create a function called getItems that simply returns the items
 //array from the google product object.

 var allItems = [];

var getItems = function (productAll){
  for (var i =0; i < productAll.items.length; i++) {
    allItems.push(productAll.items[i]);
  }
  return allItems;
}

// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));



//2) Create a function called getItemsByBrand that takes an item
//array returns a new array of all items of a specified brand.

var getItemsByBrand = function (brandName){
  var itemsName = [];
for (var i=0; i<allItems.length; i++){
if (allItems[i].product.brand === brandName ){
itemsName.push(allItems[i].product);
}
}return itemsName;
}


//3) Create a function called getItemsByAuthor that takes an item
//array and returns a new array of all items by a specified author.

var getItemsByAuthor = function (authorName){
var authorsList = [];
for (var i=0; i<allItems.length; i++){
  if (allItems[i].product.author.name === authorName){
    authorsList.push(allItems[i].product);
  }
}return authorsList;
}


//4) Create function called getAvailableProducts that takes an item array
//and returns an array containing all of the available products
//(an available product is one with at least one availability of "inStock" in the inventories array)

 var availableProds = [];

var getAvailableProducts = function(stockStatus){
  for (var i=0; i<allItems.length; i++){
    if (allItems[i].product.inventories[0].availability === stockStatus){
availableProds.push(allItems[i].product);
    }
} return availableProds;
}








