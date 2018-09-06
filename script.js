 //1) Create a function called getItems that simply returns the items
 //array from the google product object.
console.log(getItems(products));
console.log(" ");


/* //2) Create a function called getItemsByBrand that takes an item array
//returns a new array of all items of a specified brand.

//Test this function by searching for Sony, Canon, Nikon and Panasonic.

console.log(getItemsByBrand("Nikon"));
console.log(getItemsByBrand("Sony"));
console.log(getItemsByBrand("Canon"));
console.log(getItemsByBrand("Panasonic"));
console.log(" ");


//3) Create a function called getItemsByAuthor that takes an item
//array and returns a new array of all items by a specified author.
//Test this function by searching for Target, CDW, eBay

console.log(getItemsByAuthor("Target"));
console.log(getItemsByAuthor("CDW"));
console.log(getItemsByAuthor("eBay"));
console.log(" "); */


//4) Create function called getAvailableProducts that takes an item array
//and returns an array containing all of the available products
//(an available product is one with at least one availability of "inStock" in the inventories array)
console.log(getAvailableProducts("inStock"));
console.log(" ");


//5) Use your functions
//Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.

//All items made by Sony.
var sonyItems = console.log(getItemsByBrand("Sony"));

//All items made by Sony that are available.
var brandStock = function (getItemsByBrand, getAvailableProducts) {
getAvailableProducts("inStock");
}
console.log(brandStock);

//All available items by the author "Adorama Camera"
console.log(getItemsByAuthor("Adorama Camera"));

//All items made by Nikon with the author eBay.
console.log(getItemsByAuthor(getItemsByBrand("Nikon"), "eBay"));


