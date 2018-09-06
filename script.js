//part1
console.log(getItems(products));

//part2
console.log(getItemsByBrand(getItems(products), "Canon"));

//part3
console.log(getItemsByAuthor(getItems(products), "Ebay"));

//part4
console.log(getAvailableProducts(getItems(products)));


//part5
//cant seem to output Sony items
var allItems = getItems(products);
console.log(getItemsByBrand(allItems, "Sony"))
