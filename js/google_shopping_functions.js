
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
/*function getItemsCount(itemData) {
  return itemData.items.length;
}

 * Define and use your functions here
 */

// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));
var compareString;

function getItems(objectData) {
  return objectData.items;
}

function getItemsByBrand(items, brand) {
  var returnArray = [];
  for (i in items) {
    compareString = items[i].product.brand;
    if (compareString === brand ) {
      returnArray.push(items[i]);
    }
  }
  if (returnArray.length > 0)
    return returnArray;
  else
    return 'Nothing found';
}
