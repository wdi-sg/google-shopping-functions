
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
var compareString, result;
var returnArray = [];
var inventories;

function checkArrayLength(array) {
    if (array.length > 0)
      return array;
    else
      return 'Nothing found';
}

function getItems(objectData) {
  return objectData.items;
}

function getItemsByBrand(items, brand) {
  returnArray = [];
  for (i in items) {
    compareString = items[i].product.brand.toLowerCase();
    if (compareString === brand.toLowerCase()) {
      returnArray.push(items[i]);
    }
  }
  result = checkArrayLength(returnArray);
  return result;
}

function getItemsByAuthor(items, author) {
  returnArray = [];
  for (i in items) {
    compareString = items[i].product.author.name.toLowerCase();
    if (compareString.indexOf(author.toLowerCase()) !== -1)
      returnArray.push(items[i]);
  }
  result = checkArrayLength(returnArray);
  return result;
}

function getAvailableProducts(items) {
    returnArray = [];

    for (i in items) {
      inventories = items[i].product.inventories;

      for (j in inventories) {
        compareString = inventories[j].availability;
        if (compareString === 'inStock')
          returnArray.push(items[i]);
      }
    }
    result = checkArrayLength(returnArray);
    return result;
}
