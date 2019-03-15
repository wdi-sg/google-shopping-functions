
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
var brandItemsDetails = [];

function getItemsByBrand(items,brand) {
  for (var i = 0; i < items.length; i++) {
    var productBrand = products["items"][i]["product"]["brand"];

    if (brand === productBrand) {
      brandItems.push(products["items"][i]["product"]["title"]);
      brandItemsDetails.push(products["items"][i]);
    }
  }
  return brandItemsDetails;
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

