// get the 25 products into a list
var jsonList = getItems(products);

// All items made by Sony.

var sonyProducts = getItemsByBrand(jsonList, 'Sony')
console.log(sonyProducts);

// All items made by Sony that are available.

console.log('List of available Sony products')
console.log(getAvailableProducts(getItemsByBrand(jsonList, 'Sony')));

// All available items by the author "Adorama Camera"

console.log('All available items by the author "Adorama Camera');
console.log(getAvailableProducts(getItemsByAuthor(jsonList, "Adorama Camera")));

// All items made by Nikon with the author eBay.

// var nikonProducts = getItemsByBrand(jsonList, 'Nikon');
// var nikonEbay = getItemsByAuthor(nikonProducts, 'eBay');
console.log('All items made by Nikon with author eBay');
console.log(getItemsByAuthor((getItemsByBrand(jsonList, 'Nikon')), 'eBay'));

// Prompt the user for the search term they are looking for.
var searchTerm = prompt('What are you searching for?');
