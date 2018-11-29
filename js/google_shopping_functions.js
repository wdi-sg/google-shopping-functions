
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }


//  * Define and use your functions here


// // output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));


var arrayItems = products.items;

var getItems = function(items) {
  return arrayItems
}

console.log(getItems(arrayItems));



var getItemsByBrand = function(items, brands) {
  var brandResult = [];
  for ( var i=0; i<arrayItems.length; i++){
    if ((arrayItems[i].product.title.toLowerCase()).includes(brands.toLowerCase())){
      brandResult.push(arrayItems[i]);
    }
}
    return brandResult;

}





var getItemsByAuthor = function(items, author) {
  var authorResult = [];
  for ( var i=0; i<arrayItems.length; i++){
    if ((arrayItems[i].product.author.name.toLowerCase()).includes(author.toLowerCase())){
      authorResult.push(arrayItems[i]);
    }
}
    return authorResult
}




var getAvailableProducts = function(items) {

  var productsResult = []
  for (var i = 0; i < arrayItems.length; i++) {
    if ((arrayItems[i].product.inventories[0].availability = "inStock")) {
      productsResult.push(arrayItems[i])

          }
  }
 return productsResult;
}

