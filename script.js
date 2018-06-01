//Q1
//option 1
/*
var productsItems = products.items;
var count = 0;
productItems.forEach(function(item){
  if (item.kind == "shopping#product")
    count++;
});

console.log(count);

//Q1
//option 2
var productsItems = products.items;
function kindShoppingProduct(x) {
  var kSP = 0;
  for (var i = 0; i < x.length; i++){
    if (x[i].kind == "shopping#product"){
      kSP++;
    }
  }
    return kSP;
}
console.log(kindShoppingProduct(productsItems));

//Also found in "itemPerPage" and "currentItemCount"

//Q2
var productsItems = products.items;
function availabilitybackorder(x) {
  for (var i = 0; i < x.length; i++){
    if (x[i].product.inventories[0].availability == "backorder"){
      console.log(x[i].product.title);
    }
  }
}
console.log(availabilitybackorder(productsItems));


//Q3
var productsItems = products.items;
function moreThanOneImage(x) {
  for (var i = 0; i < x.length; i++){
    if (x[i].product.images.length > 1){
      console.log(x[i].product.title);
    }
  }
}
moreThanOneImage(productsItems);

//Q4
var productsItems = products.items;
function allCanon(x) {
  for (var i = 0; i < x.length; i++){
    if (x[i].product.brand.indexOf("Canon") >= 0){
      console.log(x[i].product.title);
    }
  }
}
allCanon(productsItems);

//Q5
var productsItems = products.items;
function printItems(x) {
  for (var i = 0; i < x.length; i++){
    if (x[i].product.author.name.indexOf("eBay") >= 0 && x[i].product.brand.indexOf("Canon") >= 0){
      console.log(x[i]);
    }
  }
}
printItems(productsItems);


//Q6
var productsItems = products.items;
function printProductsWithBrandPriceImage(x) {
  for (var i = 0; i < x.length; i++){
      console.log(x[i].product.brand);
      console.log(x[i].product.inventories[0].price);
      console.log(x[i].product.images);
    }
}
printProductsWithBrandPriceImage(productsItems);

*/
//continuation of excercise
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

var items = getItems(products);
var sonyItems = getItemsByBrand("Sony");
//console.log(sonyItems);

function getAvailableBrandProducts(brand,instock){
  var availableBrandProducts = []
  for (var i = 0; i < items.length; i++){
    if ((items[i].product.brand.toLowerCase() == brand.toLowerCase()) && (items[i].product.inventories[0].availability.toLowerCase() == instock.toLowerCase())){
      availableBrandProducts.push(items[i]);
    }
  }
  return availableBrandProducts;
}

var sonyavail = getAvailableBrandProducts("sony","instock");
console.log(sonyavail);





