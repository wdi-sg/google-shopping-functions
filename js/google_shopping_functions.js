
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

// function getItemsCount(itemData) {
//   return itemData.length;
// }

/*
 * Define and use your functions here
 */

function getItems(objectData) {
  var items = products["items"];
  return items;
}

var brandItems = [];

function getItemsByBrand(items,brand) {
  for (var i = 0; i < items.length; i++) {
    var productBrand = products["items"][i]["product"]["brand"];

    if (brand === productBrand) {
      brandItems.push(products["items"][i]["product"]["title"]);
    }
  }
  return brandItems;
}

/* 3. Get a list of products by specifying author's name. */

var itemsAuthor = [];

function getItemsByAuthor(items,author) {
  // console.log(author)
  for (var i = 0; i < items.length; i++) {
    var authorName = products["items"][i]["product"]["author"]["name"].toLowerCase();
    author = author.toLowerCase();
    if (authorName.includes(author) || authorName === author) {
      itemsAuthor.push(products["items"][i]["product"]["title"]);
    }
  }
  return itemsAuthor;
}

// console.log(itemsAuthor);

/* 4. Get a list of products by specifying author's name. */

var availableProducts = [];
var availProductsDetails = [];

function getAvailableProducts(items) {

  for (var i = 0; i < items.length; i++) {
    if (products["items"][i]["product"]["inventories"][0]["availability"] === "inStock") {
    availableProducts.push(products["items"][i]["product"]["title"]);
    availProductsDetails.push(products["items"][i]);
    }
  }
  return availableProducts;
}

/* 5. Use your functions. */

// var result = [];

// function compare(array1,array2) {
//   for (var i = 0; i < array1.length; i++) {
//     for(var j = 0; j < array2.length; j++ ) {
//       if(array1[i] === array2[j]) {
//         result.push(products["items"][i]["product"]["title"]);
//       }
//     }
//   }
//   return result;
// }


// output item count using the getItemsCount function


// console.log('Item Count: ' + getItemsCount(data));

