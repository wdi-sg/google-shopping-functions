

// All items made by Sony.
// console.log(getItemsByBrand(getItems(products), "Sony"));

// All items made by Sony that are available.
// var sonyItems = getItemsByBrand(getItems(products), "Sony");
// console.log(getAvailableProducts(sonyItems));

// All available items by the author "Adorama Camera"
// var authoredItems = getItemsByAuthor(getItems(products), "Adorama Camera");
// console.log(authoredItems);


// All items made by Nikon with the author eBay.
var nikonItems = getItemsByBrand(getItems(products), "Nikon");
var nikon_ebayItems = getItemsByAuthor(nikonItems, "eBay");
console.log(nikon_ebayItems);
