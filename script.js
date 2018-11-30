//
var getItems = function(objectData) {
  return products.items;
}
//
var itemArray = getItems(products);
var getItemsByBrand = function(item, brand) {
  var brandArray =[];
  for (i=0; i<itemArray.length; i++) {
    var searchBrand = itemArray[i].product.brand;
    if (searchBrand.toLowerCase() === brand.toLowerCase()) {
      brandArray.push(itemArray[i]);
    }
  }
  return brandArray;
}
//
var getItemsByAuthor = function(item, author){
  var authorArray = [];
  for (i = 0; i < itemArray.length; ++i) {
    var searchAuthor = itemArray[i].product.author.name;
    if (searchAuthor.toLowerCase().includes(author.toLowerCase())) {
      authorArray.push(itemArray[i]);
    }
  }
  return authorArray;
}
//
getAvailableProducts = function(itemsArray) {
  var inventoryArray =[];
  for (i = 0; i < itemsArray.length; i++) {
    var inventoryCheck = itemArray[i].product.inventories;
    for (j = 0; j < inventoryCheck.length; j++) {
      if (inventoryCheck[j].availability === "inStock") {
        inventoryArray.push(itemsArray[i]);
      }
    }
  }return inventoryArray;
}
//

console.log(getItemsByBrand(itemArray, "Sony"));

console.log(getAvailableProducts(getItemsByBrand(itemArray, "Sony")));

console.log(getAvailableProducts(getItemsByAuthor(itemArray, "Adorama Camera")));

console.log(getItemsByAuthor(getItemsByBrand(itemArray,"Nikon"), "eBay"));
