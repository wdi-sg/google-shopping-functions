var fs = require('fs')
var sampleObject = getItems(products)

fs.writeFile("./object.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

// Part 1 Call
console.log(getItems(products));
// Part 2 Call
console.log(getItemsByBrand(getItems(products), "Nikon"));
// Part 3 Call
console.log(getItemsByAuthor(getItems(products), "Target"));
console.log(getItemsByAuthor(getItems(products), "CDW"));
console.log(getItemsByAuthor(getItems(products), "Ebay"));
// Part 4 Call
console.log(getAvailableProducts(getItems(products)));
// Part 5 Call
var allItems = getItems(products);
// Get all items made by Sony
console.log(getItemsByBrand(allItems, "Sony"))
// Get all items made by Sony and is available
console.log(getAvailableProducts(getItemsByBrand(allItems,"Sony")));
// Get all available items by the author "Adorama Camera"
console.log(getAvailableProducts(getItemsByAuthor(allItems,"Adorama Camera")));
// Get all items made by Nikon with the author eBay.
console.log(getItemsByAuthor(getItemsByBrand(allItems, "Nikon"), "eBay"));
// Further Exercises prompt the user what to search for
var searchTerm = prompt("What do you want to search for? Brand, Author or Availability?")
if (searchTerm.toLowerCase() == "brand") {
	var searchBrand = prompt("What brand would you like to search for?")
	var searchResultByBrand = getItemsByBrand(allItems, searchBrand.toLowerCase())
// Ensures that the product is returned only if products were found. otherwise return message that no products were found.
	if (searchResultByBrand > 0) {
	console.log(searchResultByBrand);
} else {
	console.log("No results were found for your brand search.")
}
} else if (searchTerm.toLowerCase() == "author") {
	var searchAuthor = prompt("Which author would you like to search for?")
	var searchResultByAuthor = getItemsByAuthor(allItems, searchAuthor)
	if (searchResultByAuthor > 0) {
		console.log(searchResultByAuthor);
	} else {
		console.log("No results were found for that particular author")
	}
} else if (searchTerm.toLowerCase() == "availability") {
	var searchResultsByAvailability = getAvailableProducts(allItems)
	if (searchResultsByAvailability > 0) {
		console.log(searchResultsByAvailability);
	} else {
		console.log("No items were available. All items are on backorder.")
	}
} else {
	console.log("Please key in a valid value");
};

// Further 2 Exercises
