//1.) getItems(objectData)
//Create a function called getItems that simply returns the items array from the google product object.
//Note all other functions (below) use the return of this function as their input.

var getItems = function (objectData) {
  return objectData.items;
}

//2. getItemsByBrand(items,brand)
//Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

var getItemsByBrand = function (items, brand) {

  var result = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand.toLowerCase() === brand.toLowerCase()) {
      result.push(items[i]);
    }
  }
  return result;
}

//3.) getItemsByAuthor(items, author)
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
//Create function called getAvailableProducts that takes an item array and returns an array containing all of 
//the available products (an available product is one with at least one availability of "inStock" in the inventories array)

var getAvailableProducts = function (items) {

  var result = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability.toLowerCase() === "instock") {
      result.push(items[i]);
    }
  }
  return result;
}
