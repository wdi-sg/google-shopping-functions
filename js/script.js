// Run functions here

//1. Create a function called getItems that simply returns the items array from the google product object.

getItems(products);

//2. Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

getItemsByBrand(getItems(products), "Canon");


//3.Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

getItemsByAuthor(getItems(products), "eBay");

//4. Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

getAvailableProducts(getItems(products));


//5. Use the functions you created in 1 - 4 to output (console.log) the following lists of items.

//All items made by Sony.
console.log(getItemsByBrand(getItems(products), "Sony"));

//All items made by Sony that are available.
console.log(getAvailableProducts(getItemsByBrand(getItems(products), "Sony")));
//why does it work when done this way though??Didn't work when inverted. Is it because the function's written location is higher?

//All available items by the author "Adorama Camera"
console.log(getItemsByAuthor(getItems(products), "Adorama Camera"));

// All items made by Nikon with the author eBay.
console.log(getItemsByAuthor(getItemsByBrand(getItems(products), "Nikon"), "eBay"));

