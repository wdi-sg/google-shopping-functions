function getItemsCount(itemData) {
  return itemData.items.length;
}

function getItems(itemData) {
  return itemData.items;
}

function printAllItems(items) {
  for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemPrice = item["product"]["inventories"][0]["price"];

      console.log(itemPrice);
  }
}

function getItemsByBrand(items, brand) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemBrand = item["product"]["brand"];

      if (itemBrand.toLowerCase() === brand.toLowerCase()) {
        result.push(item);
      }
  }

  return result;
}

function getItemsByAuthor(items, author) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemAuthorName = item["product"]["author"]["name"];

      if (itemAuthorName.toLowerCase().includes(author.toLowerCase())) {
        result.push(item);
      }
  }

  return result;
}

function getAvailableProducts(items) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemAvailability = item["product"]["inventories"][0]["availability"];

      if (itemAvailability.toLowerCase() === "instock") {
        result.push(item);
      }
  }

  return result;
}

function getResultsBySearchTerm(items, searchTerm) {
  var result = [];

  if (searchTerm === "") {
    alert("Please key in a search term");
    return result;
  }

  for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemTitle = item["product"]["title"];
      var itemBrand = item["product"]["brand"];
      var itemAuthorName = item["product"]["author"]["name"];

      if (itemTitle.toLowerCase().includes(searchTerm.toLowerCase())
          || itemBrand.toLowerCase().includes(searchTerm.toLowerCase())
            || itemAuthorName.toLowerCase().includes(searchTerm.toLowerCase())) {
        result.push(item);
      }
  }

  if (result.length < 0) {
      alert("No items found :(");
  }

  return result;
}

function getResultsByMinimumPrice(items, minimumPrice) {
  var result = [];

  if (minimumPrice === "" || Number(minimumPrice) === NaN) {
    alert("Please key in the minimum price");
    return result;
  }

  for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemPrice = item["product"]["inventories"][0]["price"];

      if (itemPrice >= Number(minimumPrice)) {
        result.push(item);
      }
  }

  if (result.length < 0) {
      alert("No items found :(");
  }

  return result;
}

function getResultsByMaximumPrice(items, maximumPrice) {
  var result = [];

  if (maximumPrice === "" || Number(maximumPrice) === NaN) {
    alert("Please key in a valid maximum price");
    return result;
  }

  for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemPrice = item["product"]["inventories"][0]["price"];

      if (itemPrice < Number(maximumPrice)) {
        result.push(item);
      }
  }

  if (result.length < 0) {
      alert("No items found :(");
  }

  return result;
}

var items = getItems(products);

// part 5
var itemsFilterBySonyBrand = getItemsByBrand(items, "Sony");
console.log(getAvailableProducts(itemsFilterBySonyBrand));

var itemsFilterByAuthor = getItemsByAuthor(items, "Adorama Camera");
console.log(getAvailableProducts(itemsFilterByAuthor));

var itemsFilterByNikonBrand = getItemsByBrand(items, "Nikon");
console.log(getItemsByAuthor(itemsFilterByNikonBrand, "eBay"));

/*
// further: part 6 and 7
var userSearchTermInput = prompt("Please input your search term?");
var itemsFilterBySearchTerm = getResultsBySearchTerm(items, userSearchTermInput);

console.log("User input: " + userSearchTermInput);
console.log(itemsFilterBySearchTerm);


// further: part 9
var userMinOrMaxInput = prompt("Do you want to search by minimum or maximum price?", "Minimum or Maximum");

if (userMinOrMaxInput.toLowerCase() === "minimum") {
  var userMinInput = prompt("Please input your minimum price?");
  var itemsFilterByMinPrice = getResultsByMinimumPrice(items, userMinInput)

  console.log("User input: " + userMinInput);
  console.log(itemsFilterByMinPrice);

} else if (userMinOrMaxInput.toLowerCase() === "maximum") {
  var userMaxInput = prompt("Please input your maximum price?");
  var itemsFilterByMaxPrice = getResultsByMaximumPrice(items, userMaxInput)

  console.log("User input: " + userMaxInput);
  console.log(itemsFilterByMaxPrice);

} else {
  alert("Invalid input :(");
}
*/

// further: part 10
var userMinInput = prompt("Please input your minimum price?");
var userMaxInput = prompt("Please input your maximum price?");

var itemsFilterByMinPrice = getResultsByMinimumPrice(items, userMinInput)
var itemsFilterByMinAndMaxPrice  = getResultsByMaximumPrice(itemsFilterByMinPrice, userMaxInput);
console.log("User input: $" + userMinInput + " to $"+ userMaxInput);
console.log(itemsFilterByMinAndMaxPrice);

// for testing purposes
printAllItems(itemsFilterByMinAndMaxPrice);
