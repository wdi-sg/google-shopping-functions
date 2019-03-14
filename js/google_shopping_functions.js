
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */


function getItemsCount(itemData) {
  return itemData.length;
}

/*
 * Define and use your functions here
 */

function getItems(objectData) {
  var items = products["items"];
  return items;
}

var brandItems = [];

function getItemsByBrand(items, brand) {
  for (var i = 0; i < items.length; i++) {
    var productBrand = products["items"][i]["product"]["brand"].toLowerCase();

    if (brand.toLowerCase() === productBrand) {
      brandItems.push(products["items"][i]["product"]["title"]);
    }
  }
  return brandItems;
}

// var brandItems = [];

// function getItemsByAuthor(items, author) {
//   for (var i = 0; i < items.length; i++) {
//     var authorName = products["items"][i]["product"]["brand"].toLowerCase();
//     if (author.toLowerCase() === authorName) {
//       brandItems.push(products["items"][i]["product"]["title"];
//     }



// output item count using the getItemsCount function


// console.log('Item Count: ' + getItemsCount(data));

