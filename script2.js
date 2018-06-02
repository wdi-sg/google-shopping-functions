// forEach() VERSION

// var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"

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

	items.forEach(function(element){   //element is item[i]
		if (element.product.brand === brand) {
			searchArr.push(element);
		}
	});

	// for (var i = 0; i < items.length; i++) {  //items.length is basically products.items.length when getItems() is passed through
	// 		if (items[i].product.brand.toLowerCase() === brand.toLowerCase()) {
	// 		searchArr.push(items[i]);
	// 	};
	// };
	return searchArr;
};

// console.log(getItemsByBrand(getItems(), 'Nikon')); //check result

// --- Part 3
var getItemsByAuthor = function(items, author) {
	var searchArr = [];

	items.forEach(function(element) {
		if (element.product.author.name.toLowerCase().includes(author.toLowerCase())) {
			searchArr.push(element);
		}
	});
	return searchArr;
}

// console.log(getItemsByAuthor( getItems() , "eBay"));

// --- Part 4
var getAvailableProducts = function(items) {
	var searchArr = [];

	items.forEach(function(element) {
		if (element.product.inventories[0].availability.toLowerCase() === "instock") {
			searchArr.push(element);
		}
	});
	return searchArr;
}

// console.log(getAvailableProducts(getItems()));

// --- Part 5
// --- Part 5
console.log(getItemsByBrand( getItems() , 'Sony' ));

console.log(getItemsByBrand( getAvailableProducts ( getItems() ) , "Sony"));

console.log(getItemsByAuthor( getAvailableProducts ( getItems() ) , "eBay"));

console.log(getItemsByAuthor(getItemsByBrand(getItems(), "Nikon"), "eBay")); 
