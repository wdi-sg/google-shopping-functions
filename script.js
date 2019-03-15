//part 1
var getItems = function() {
  return products.items;
}

//part 2  getItemsByBrand (items, brand)

var getItemsByBrand = function() {
var brandItems = [""];
    for (var i= 0; i < result.length; i++) {
    if (result[i].product.brand) {
    brandItems.push(result[i].product);
    }
  }
  return brandItems;
}



//part 3

var getItemsByAuthor = function() {
  var authorItems = [];
    for (var i= 0; i < result.length; i++) {
    if (result[i].product.author.name.includes(authorChoice)) {
    authorItems.push(result[i].product);
    }
  }
  return authorItems;
}






//part 4
var getAvailableProducts = function() {
  var availItems = [];
    for (var i= 0; i < result.length; i++) {
    if (result[i].product.inventories[0].availability==="instock") {
    availItems.push(result[i].product);
    }
  }
  return availItems;
}






