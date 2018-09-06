// find items array from product
// product.items
var getItems = function() {
  return products.items;
};

var getItemsByBrand = function(items, brand) {
  var itemsByBrand = [];
  for(var i = 0; i < items.length; i++){
    if(items[i].product.brand.toLowerCase() === brand.toLowerCase()){
      itemsByBrand.push(items[i]);
    }
  }return itemsByBrand;
};


var getItemsByAuthor = function(items, author){
  var itemsByAuthor =[];
  for(var i = 0; i < items.length; i++){
    if(items[i].product.author.name === author){
      itemsByAuthor.push(items[i]);
    }
  }return itemsByAuthor;
};

var getAvailableProducts = function(items) {
  var availableProducts = [];
  for(var i = 0; i < items.length; i++){
    if(items[i].product.inventories[0].availability === "inStock") {
      availableProducts.push(items[i]);
    }
  }return availableProducts;
};


var sonyItems = getItemsByBrand(getItems(), "Sony");
console.log(sonyItems);// items by Sony
var availableSonyItems = getAvailableProducts(sonyItems);
console.log(availableSonyItems);//available Sony items

//available items by Adorama Camera
var adoramaCameraItems = getItemsByAuthor(getItems(), "Adorama Camera");
var availableAdoramaCameraItems = getAvailableProducts(adoramaCameraItems);
console.log(availableAdoramaCameraItems);

//all items made by Nikon with author as eBay
var nikonItems = getItemsByBrand(getItems(), "Nikon");
var eBayNikonItems = getItemsByAuthor(nikonItems, "eBay");
console.log(eBayNikonItems);
