// // 5a. All items made by Sony.
console.log(getItemsByBrand(getItems,'Sony'))

// 5b. All items made by Sony that are available.

var sonyItems = getItemsByBrand(getItems, 'Sony');
console.log(getAvailableProducts(sonyItems))

// 5c. All available items by the author "Adorama Camera"

var AdoramaCameraItems = getItemsByAuthor(getItems,"Adorama Camera");
console.log(getAvailableProducts(AdoramaCameraItems))

// 5d. All items made by Nikon with the author eBay.

var nikonItems = getItemsByBrand(getItems, 'Nikon');
console.log(getItemsByAuthor(nikonItems,"Adorama Camera")

// 5e. remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.
