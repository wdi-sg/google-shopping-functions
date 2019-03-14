// console.log(products);

// // 1. Returns the items array from the google product object.

// console.log(getItems(products));

// // 2. Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.

// console.log(getItemsByBrand(products.items, "Sony"));
// console.log(getItemsByBrand(products.items, "Canon"));
// console.log(getItemsByBrand(products.items, "Nikon"));
// console.log(getItemsByBrand(products.items, "Panasonic"));

// // 3. Create a function called `getItemsByAuthor` that takes an item array and returns a new array of all items by a specified author.
// //Test this function by searching for Target, CDW, eBay.

// console.log(getItemsByAuthor(products.items, "Target"));
// console.log(getItemsByAuthor(products.items, "CDW"));
// console.log(getItemsByAuthor(products.items, "eBay"));

// // 4. Create function called `getAvailableProducts` that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array).

// console.log(getAvailableProducts(products.items)); 

/*
5.) Use your functions

Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.

* All items made by Sony.
* All items made by Sony that are available.
* All available items by the author "Adorama Camera"
* All items made by Nikon with the author eBay.

* remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.
*/

console.log(getItemsByBrand(products.items, "Sony"));
console.log(getAvailableSonyProducts(products.items));
console.log(getItemsByAuthor(products.items, "Adorama Camera"));
console.log(getItemsByBrand(getItemsByAuthor(products.items, "eBay"), "Nikon"));
