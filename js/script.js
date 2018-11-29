var items = getItems(products)

// All items made by Sony.

var sonyItems = getItemsByBrand(items, 'Sony');
// console.log(sonyItems);

// All items made by Sony that are available.

var availableSonyProducts = getAvailableProducts(sonyItems);

// All available items by the author "Adorama Camera"

var adoramaProducts = getItemsByAuthor(items, "Adorama Camera")

// All items made by Nikon with the author eBay.

var nikonItems = getItemsByBrand(items, 'Nikon');
var nikonOnEbay = getItemsByAuthor(nikonItems, "eBay");


