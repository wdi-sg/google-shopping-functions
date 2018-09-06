//1.) getItems(objectData)
//input: json object
//returns: an array of items
//Create a function called getItems that simply returns the items array from the google product object.
//Note all other functions (below) use the return of this function as their input.

var getItems = function (objectData) {
  return objectData.items;
}

//2. getItemsByBrand(items,brand)
//input: an array of items, a string of a brand to filter with
//returns: an array of items (of a specific brand)
//Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

var getItemsByBrand = function (items,brand) {

  var result = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand.toLowerCase() === brand.toLowerCase() ) {
      result.push(items[i]);
    }
  }
  return result;
}

//3.) getItemsByAuthor(items, author)
//input: an array of items, a string of an author to filter with
//returns: an array of items (of a specific author)
//Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

var getItemsByAuthor = function (items, author) {

  var result = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name.toLowerCase().includes(author.toLowerCase())) {
      result.push(items[i]);
    }
  }
  return result;
}

//4.) getAvailableProducts(items)
//input: an array of items
//returns: an array of items (that are available)
//Create function called getAvailableProducts that takes an item array and //returns an array containing all of the available products (an available product //is one with at least one availability of "inStock" in the inventories array)

var getAvailableProducts = function (items) {

  var result = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability.toLowerCase() === "instock") {
      result.push(items[i]);
    }
  }
  return result;
}

//5.) Use your functions
//Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.

var items = getItems(products);

/*
//All items made by Sony.
console.log("Listing items made by Sony.")
console.log(getItemsByBrand(items, "Sony"));

//All items made by Sony that are available.
console.log("Listing items made by Sony that are available.");
console.log(getAvailableProducts(getItemsByBrand(items, "Sony")));

//All available items by the author "Adorama Camera"
console.log("Listing available items by the author 'Adorama Camera'.");
console.log(getAvailableProducts(getItemsByAuthor(items, "Adorama Camera")));

//All items made by Nikon with the author eBay.
console.log("Listing items by Nikon with the author eBay.")
console.log(getItemsByAuthor(getItemsByBrand(items, "Nikon"),"eBay"));
*/

//Further
//Prompt the user for the search term they are looking for.
//If no results were found, let the user know.
//Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:
//1. The number of product items
//2. The country of each item
//3. Total price of all inventory
//4. Search for one of the things above
//Create another search function and/or think of other interesting ways to combine the functions to perform useful searches.

var countryArray = function (items) {

  var result = [];

  for (i = 0; i < items.length; i++) {
    result.push(items[i].product.country);
  }

  return result;
}

var totalPrice = function (items) {

  var result = 0;

  for (i = 0; i < items.length; i++) {
    result += items[i].product.inventories[0].price;
  }

  return result.toFixed(2);
}

var filteredItems = items;

var brand = prompt ("Filter by a particular brand? (leave blank for no)");

if (brand !== "") {
  filteredItems = getItemsByBrand(filteredItems,brand);
}

var author = prompt ("Filter by a particular seller? (leave blank for no)");

if (author !== "") {
  filteredItems = getItemsByAuthor(filteredItems,author);
}

var onlyAvailable = confirm("Would you like to only display available products?");
var displayTotal = confirm("Would you like to display the total number of products found?");
var displayCountry = confirm("Would you like to display the country of each item?");
var displayPrice = confirm("Would you like to display the total price of all items found?");

if (onlyAvailable) {
  filteredItems = getAvailableProducts(filteredItems);
}

console.log(filteredItems);

if (displayTotal) {
  if (filteredItems.length === 1) {
    console.log ("One item found.");
  } else {
    console.log(filteredItems.length + " items found.");
  }
}

if (displayCountry) {
  console.log("Countries:");
  console.log(countryArray(filteredItems));
}
if (displayPrice) {
  console.log("Total price of all items found: $" + totalPrice(filteredItems));
}
if (!displayTotal && filteredItems.length === 0) {
  console.log("Sorry! Nothing found.");
}
