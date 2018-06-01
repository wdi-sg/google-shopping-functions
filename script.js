//Q1

function getItems(func) {
  return func.items;
}

//Q2
function getItemsByBrand(brand) {
  var brandItems = [];
  for (var i = 0; i < items.length; i++){
    if (items[i].product.brand.toLowerCase() == brand.toLowerCase()){
      brandItems.push(items[i]);
    }
  }
  return brandItems;
}

//Q3
function getItemsByAuthor(author){
  var authorItems = [];
  for (var i = 0; i < items.length; i++){
    if (items[i].product.author["name"].toLowerCase() == author.toLowerCase()){
      authorItems.push(items[i]);
    }
  }
  return authorItems;
}

//Q4
function getAvailableProducts(instock){
  var availableItems = []
  for (var i = 0; i < items.length; i++){
    if (items[i].product.inventories[0].availability.toLowerCase() == instock.toLowerCase()){
      availableItems.push(items[i]);
    }
  }
  return availableItems;
}


//Q5

//pt.1
var items = getItems(products);
var sonyItems = getItemsByBrand("Sony");
//console.log(sonyItems);

//pt.2
/*
function getAvailableBrandProducts(brand, instock){
  var availableBrandProducts = []
  for (var i = 0; i < items.length; i++){
    if ((items[i].product.brand.toLowerCase() == brand.toLowerCase()) && (items[i].product.inventories[0].availability.toLowerCase() == instock.toLowerCase())){
      availableBrandProducts.push(items[i]);
    }
  }
  return availableBrandProducts;
}

var sonyInstock = getAvailableBrandProducts("sony","instock");
console.log(sonyInstock);
*/

//pt.3
/*
var availableItemsByAdorama = getItemsByAuthor("adorama camera")
console.log(availableItemsByAdorama);
*/

//pt.4

function getBrandAndAuthor(brand, author) {
  var brandAndAuthorItems = []
  for (var i = 0; i < items.length; i++){
    if (items[i].product.brand.toLowerCase() == brand.toLowerCase() && items[i].product.author["name"].indexOf(author) >= 0){
      brandAndAuthorItems.push(items[i]);
    }
  }
  return brandAndAuthorItems;
}

var authorInstock = getBrandAndAuthor("nikon", "eBay");
console.log(authorInstock);




