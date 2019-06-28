
// ONE
// Create a function called getItems that simply returns the items array from the google product object.
function getItems(itemData) {   // objectData is products
  return itemData.items;
}

// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
function getItemsByBrand(itemsArray, brand) {    // brand will be user input
  var brandArray = [];
  for (var i = 0; i < itemsArray.length; i++ ) {
    //var title = itemsArray[i]["product"]["title"];       // if you want to print the title aka name of products
    var availBrand = itemsArray[i]["product"]["brand"];

    if (availBrand === brand) {
      //brandArray.push(title);
      brandArray.push(itemsArray[i])
    }
  }
  return brandArray;
}


// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
function getItemsByAuthor(itemsArray, author) {
  var authorArray = [];
  for (var i = 0; i < itemsArray.length; i++ ) {
    var authorName = itemsArray[i]["product"]["author"]["name"];

    if (authorName === author) {
      authorArray.push(itemsArray[i]);
    }
  }
  return authorArray;
}


// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
function getAvailableProducts(itemsArray) {
  var availProds = [];
  for (var i = 0; i < itemsArray.length; i++ ) {
    var inventories = itemsArray[i]["product"]["inventories"];

    for (j = 0; j < inventories.length; j++) {
      var availability = inventories[j]["availability"];

      if (availability === "inStock") {
        availProds.push(itemsArray[i]["product"]);
      }
    }
  }
  return availProds
}

/////////////////// FURTHER ////////////////////////


// The number of product items
function getItemsCount(itemData) {
  return itemData.items.length;
}

// The country of each item
function getItemCountry(itemsArray) {
  var itemCountry = {};
  for (var i = 0; i < itemsArray.length; i++ ) {
    country = itemsArray[i]["product"]["country"];
    title = itemsArray[i]["product"]["title"];

    itemCountry[title] = country;
  }
  return itemCountry;
}

// Total price of all inventory
function totalInventoryPrice(itemsArray) {
  var total = 0;
  for (var i = 0; i < itemsArray.length; i++ ) {
    var inventories = itemsArray[i]["product"]["inventories"];

    for (j = 0; j < inventories.length; j++) {
      var price = inventories[j]["price"];

      total += price;
    }
  }
  return total;
}

// price range using max/min
function getItemsAccToRange(max, min) {
  var itemsInRange = [];
  for (var i = 0; i < itemsArray.length; i++ ) {
    var inventories = itemsArray[i]["product"]["inventories"];

    for (j = 0; j < inventories.length; j++) {
      var price = inventories[j]["price"];

      if (min < price && max > price) {
        itemsInRange.push(itemsArray[i]);
      }
    }
  }
  return itemsInRange;
}

