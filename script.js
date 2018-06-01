// --- Part 1
var getItems = function() {
	return products.items // returns all products
}

// --- Part 2
// access brand: products-items[i]-product-brand
// input: an array of items, a string of a brand to filter with
// output: an array of items (of a specific brand)

var getItemsByBrand = function(items, brand) {
	var searchArr = [];
	for (var i = 0; i < items.length; i++) {  //items.length is basically products.items.length when getItems() is passed through
			if (items[i].product.brand.toLowerCase() === brand.toLowerCase()) {
			searchArr.push(items[i]);
		};
	};
	return searchArr;
};

// console.log(getItemsByBrand(getItems(), 'Nikon')); //check result

// --- Part 3
var getItemsByAuthor = function(items, author) {
	var searchArr = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].product.author.name.includes(author)) { // !!! ask: why when use toLowerCase(), will return false
			searchArr.push(items[i]);
		};
	};
	return searchArr;
};

// console.log(getItemsByAuthor(getItems(), 'pictureline.com')); //check result

// --- Part 4
var getAvailability = function(items) {
	var searchArr = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].product.inventories[0].availability.toLowerCase() === "instock") {
			searchArr.push(items[i]);
		};
	};
	return searchArr;
};

// console.log(getAvailability(getItems()));

// --- Part 5
console.log(getItemsByBrand( getItems() , 'Sony' ));

console.log(getItemsByBrand( getAvailability ( getItems() ) , "Sony"));

console.log(getItemsByAuthor( getAvailability ( getItems() ) , "eBay"));

//brand by nikon, author is ebay
console.log(getItemsByAuthor(getItemsByBrand(getItems(), "Nikon"), "eBay"));
console.log(getItemsByBrand(getItemsByAuthor(getItems(), "eBay") , "Nikon")); // same same






