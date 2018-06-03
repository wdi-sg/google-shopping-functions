// All items made by Sony

console.log(getItemsByBrand(getItems(products), "Sony"));



// All items made by Sony that are available

var sonyItems = getItemsByBrand(getItems(products), "Sony");
var availableItems = getAvailableProducts(getItems(products));
var availableSonyItems = [];
for (var i = 0; i < sonyItems.length; i++) {
	for (var j = 0; j < availableItems.length; j++) {
		if (sonyItems[i] === availableItems[j]) {
			availableSonyItems.push(sonyItems[i]);
		}
	}
}
console.log(availableSonyItems);



// All available items by the author "Adorama Camera"

var adorama = getItemsByAuthor(getItems(products), "Adorama Camera");
var availableAdoramaItems = [];
for (var i = 0; i < adorama.length; i++) {
	for (var j = 0; j < availableItems.length; j++) {
		if (adorama[i] === availableItems[j]) {
			availableAdoramaItems.push(adorama[i]);
		}
	}
}
console.log(availableAdoramaItems);



// All Nikon items by author eBay

var nikonItems = getItemsByBrand(getItems(products), "Nikon");
var ebayItems = getItemsByAuthor(getItems(products), "eBay");
var nikonEbayItems = [];
for (var i = 0; i < nikonItems.length; i++) {
	for (var j = 0; j < ebayItems.length; j++) {
		if (nikonItems[i] === ebayItems[j]) {
			nikonEbayItems.push(nikonItems[i]);
		}
	}
}
console.log(nikonEbayItems);