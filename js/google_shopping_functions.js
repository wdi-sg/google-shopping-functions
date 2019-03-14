/*
 * Define and use your functions here

 remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.

** Example Function Usage**

//verbose -- outputs all cannon products
var items = getItems(data);
var cannonItems = getItemsByBrand(items, 'Cannon');
console.log(cannonItems);

//single line version -- does the same as above
console.log(getItemsByBrand(getItems(data), 'Cannon'));

 */


//1. Create a function called getItems that simply returns the items array from the google product object.

var getItems = function(objectData){
  return objectData.items;
};

//2. Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

var getItemsByBrand = function(itemArray,brand){
  var gib = [];
  for (var i = 0; i < itemArray.length; i++) {
    if (itemArray[i].product.brand === brand) {
      gib.push(itemArray[i]);
    }
  }
  return gib;
};

//3. Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

var getItemsByAuthor = function(items,author){
  var gia = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name.includes("eBay")) {
      gia.push(items[i]);
    }
  }
  return gia;
};

//4. Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

var getAvailableProducts = function(itemsArray){
  var gap = [];
  for (var i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i].product.inventories[0].availability === "inStock") {
      gap.push(itemsArray[i]);
    }
  }
  return gap;
};


/*
5. Use the functions you created in 1 - 4 to output (console.log) the following lists of items.

All items made by Sony.

All items made by Sony that are available.

All available items by the author "Adorama Camera"

All items made by Nikon with the author eBay.
*/
