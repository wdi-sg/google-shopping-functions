//Part1
var getItems = function(product) {

  var item = [];

  for (var i = 0; i < product.items.length; i++) {

    item.push(product.items[i]);
  }

  return item;

};

//Part2
var getItemsByBrand = function(array, brands) {

  var brandsArray = [];
  var brandToSearch = brands;

  for (var i = 0; i < array.length; i++) {
    if (brandToSearch === array[i].product.brand) {
      brandsArray.push(array[i])
    }
  }

  return brandsArray;

};

//Part3
var getItemsByAuthor = function(array, authors) {

  var authorArrays = [];
  var authorToSearch = authors;

  for (var i = 0; i < array.length; i++) {
    if (authorToSearch === array[i].product.author.name) {
      authorArrays.push(array[i]);
    }
  }

  return authorArrays;
};

//Part4
var getAvailableProducts = function(array) {

  var availableArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i].product.inventories[0].availability === "inStock") {
      availableArray.push(array[i]);
    }
  }

  return availableArray;

};























