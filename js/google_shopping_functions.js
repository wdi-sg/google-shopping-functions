// // //Part 1
var getItems = function() {
  return product.items
}

// //Part 2
var getItemsByBrand = function(items,brand) {
var brandArray = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].items.product.brand.toLowerCase() === brand.toLowerCase()) {
    brandArray.push(items[i]);
  }
}

 return brandArray;
};

// //Part 3
var getItemsByAuthor = function(items, author) {
var authorArray = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].items.author.name.includes(author[i])) {
    authorArray.push(items[i]);
  }
 }
return authorArray;
};

//Part 4
var getAvailableProducts = function(items) {
// var availableProducts = [];
for (var i = 0; i < item.length; i++) {
  if (items[i].product.inventories[0].availability === "inStock") {
  items.push([i])
  }
  return availableProducts;
 }
};

//Part 5

//All items made by Sony
var allItems = getItems(products);
console.log(getItemsByBrand(allItems, "Sony"));

//All items made by Sony that are available
console.log(getItemsByBrand(getAvailableProducts(allItems, "Sony")));

//All available items by the author "Adorama Camera"
console.log(getAvailableProducts(getItemsByAuthor(allItems, "Adorama Camera")));


//All items made by Nikon with the author eBay.
console.log(getItemsByBrand(getItemsByAuthor(allItems, "Nikon"), "eBay"));

