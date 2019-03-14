// console.log(products);
// console.log('Item Count: ' + getItemsCount(products));

// Deliverable 1
console.log("Item Array: ")
console.log(getItems(products));

// Deliverable 2
console.log("Array of items by Sony: ")
console.log(getItemsByBrand(getItems(products),"Sony"));

// Deliverable 3
console.log("Array of items by Target: ")
console.log(getItemsByAuthor(getItems(products),"Target"));

// Deliverable 4
console.log("Available products: ")
console.log(getAvailableProducts(getItems(products)));

// Deliverable 5
//
// All items made by Sony.
console.log("Array of items by Sony: ")
console.log(getItemsByBrand(getItems(products),"Sony"));

// All items made by Sony that are available.
console.log("Items made by Sony that are available: ")
console.log(getAvailableProducts(getItemsByBrand(getItems(products),"Sony")))

// All available items by the author "Adorama Camera"
console.log("Available items by Adorama Camera: ")
console.log(getAvailableProducts(getItemsByAuthor(getItems(products),"Adorama Camera")));

// All items made by Nikon with the author eBay.
console.log("Items made by Nikon with author eBay: ")
console.log(getItemsByBrand(getItemsByAuthor(getItems(products),"eBay"),"Nikon"));

