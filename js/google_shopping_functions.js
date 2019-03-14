
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }

//Deliverables 1
var getItems = function(objectData) {
  return objectData.items
}

//Deliverables 2
var getItemsByBrand = function(items, brand) {
  var brandResults = []
  for (i=0; i<items.length;i++) {
    if (items[i].product.brand === brand) {
      brandResults.push(items[i]);
    }
  }
  return brandResults;
}

//Deliverables 3
var getItemsByAuthor = function (items, author) {
  var authorResults = []
  for (j=0; j<items.length; j++) {
    if (items[j].product.author.name.includes(author)) {
      authorResults.push(items[j]);
    }
  }
  return authorResults;
}

//Deliverables 4
var getAvailableProducts = function (items) {
  var inStock = []
  for (k=0; k<items.length;k++) {
    for (l=0; l<items[k].product.inventories.length;l++) {
      if (items[k].product.inventories[l].availability === "inStock") {
      inStock.push(items[k]);
      break;
      }
    }
  }
  return inStock;
}


/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

