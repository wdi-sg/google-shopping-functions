//part1
var getItems = function(products) {
  return products.items;
};



//part2
var getItemsByBrand = function(items, brand) {
  var itemsByBrand = [];
  for (var i = 0; i < items.length; i++) {
    if(items[i].product.brand === "Canon") {
      itemsByBrand.push(items[i]);
    }
  }
  return itemsByBrand;
};




//part3
//stuck here, no output
var getItemsByAuthor = function(items, author) {
  var itemsByAuthor = [];
  for (var i = 0; i < items.length; i++) {
    if(items[i].product.author.name.includes(author)) {
      itemsByAuthor.push(items[i]);
    }
  }
return itemsByAuthor;
}



//part4
var getAvailableProducts = function(items) {
  var availableProducts = [];
  for (i = 0; i < items.length; i++) {
    if(items[i].product.inventories[0].availability == "inStock") {
      availableProducts.push(items[i]);
    }
  }
  return availableProducts;
}
