getItemsCount(products);

// All items made by Sony.
console.log(getItemsByBrand(getItems(products), "Sony")); //works

// All items made by Sony that are available.
console.log(getItemsByBrand(getAvailableProducts(getItems(products)), "Sony")); //works


// All available items by the author "Adorama Camera"
console.log(getItemsByAuthor(products.items, "Adorama Camera")); //works

// All items made by Nikon with the author eBay.
var itemsByNikon = getItemsByBrand(getItems(products), "Nikon");
console.log(getItemsByAuthor(itemsByNikon, "eBay"));

// All available items by camera makers (Canon, Nikon Sony for example)
var itemsByCanon = getItemsByBrand(getItems(products), "Canon");
var itemsByNikon = getItemsByBrand(getItems(products), "Nikon");
var itemsBySony = getItemsByBrand(getItems(products), "Sony");
var itemsByCameraMakers = itemsByCanon.concat(itemsByNikon).concat(itemsBySony);
console.log(getAvailableProducts(itemsByCameraMakers)); //works