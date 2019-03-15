
/*
 * example function called getItemsCount
 * input: accepts full item data
//  * output: returns the length of the items array
//  */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }


//  * Define and use your functions here


// // output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));
// /*
//  * example function called getItemsCount
//  * input: accepts full item data
//  * output: returns the length of the items array
//  */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }

// /*
//  * Define and use your functions here
//  */

// // output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

var getItems = function(objectData) {
  return objectData;
}

var items = getItems(products.items);

var getItemsByBrand = function(items, itemBrand) {
  var pushArray = [];
  for (i=0; i<items.length; i++) {
    if (items[i].product.brand === itemBrand) {
      pushArray.push(items[i]);
    }
  }
  return pushArray;
}

var getItemsByAuthor =  function(items, itemAuthor) {
  var pushArray = [];
  for (i=0; i<items.length; i++) {
    if (items[i].product.author.name.includes(itemAuthor)) {
      pushArray.push(items[i]);
    }
  }
  return pushArray;
}

var getAvailableProducts = function(items) {
  var pushArray = [];
  for (i=0; i<items.length; i++) {
    if (items[i].product.inventories[0].availability === 'inStock') {
      pushArray.push(items[i]);
    }
  }
  return pushArray;
