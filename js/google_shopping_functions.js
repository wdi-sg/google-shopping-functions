
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

function getItems(itemData) {
  return itemData.items;
}

//

function getItemsByBrand(items,brand) {

  var result = [];

  for (var i = 0; i < items.length; i++) {
    var productBrand = items[i]["product"]["brand"].toLowerCase();

    if (productBrand === brand.toLowerCase()) {
      result.push(items[i]);
    }
  }
  return result;
}

/* 3. Get a list of products by specifying author's name. */


function getItemsByAuthor(items,author) {

  var result = [];

  for (var i = 0; i < items.length; i++) {
    var authorName = items[i]["product"]["author"]["name"].toLowerCase();

    if (authorName.includes(author)) {
      result.push(items[i]);
    }
  }
  return result;
}

/* 4. Get a list of available names. */

function getAvailableProducts(items) {

  var result = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i]["product"]["inventories"][0]["availability"] === "inStock") {
      result.push(items[i]);
    }
  }
  return result;
}

// function to only show items below a specified price

function showProductsBelowPrice(price) {
  for (var i = 0; i < items.length; i++) {
    if (products["items"][i]["product"]["inventories"][0]["price"] < price) {
      productsBelowPrice.push(products["items"][i]["product"]["title"]);
    }
  }
  return productsBelowPrice;
}

function minMaxPrice(min,max) {

  for (var i = 0; i < items.length; i++) {

    if (products["items"][i]["product"]["inventories"][0]["price"] <= max && products["items"][i]["product"]["inventories"][0]["price"] >= min) {

        minMaxProducts.push(products["items"][i]["product"]["title"]);
    }
  }
  return minMaxProducts;
}

/* 5. Use your functions. */
// Answered in script.js

