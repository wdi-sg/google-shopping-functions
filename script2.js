//5.1) sony items
console.log(getItemsByBrand(itemsList, "sony"));

 // 5.2) Sony and available
console.log(getItemsByBrand(getAvailableProducts(itemsList), "sony"));

// 5.3) available, author "adorama"
console.log(getItemsByAuthor((itemsList),"adorama"));
// console.log(getAvailableProducts(getItemsByAuthor(getItems(products),"adorama")));

//5.4) nikon all and author ebay
console.log(getItemsByBrand(getItemsByAuthor(itemsList,"ebay"), "nikon"));
