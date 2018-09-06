console.log(products.items.length);

//Part 1: Create getItems function that returns items array products object.
var item = products.items;
var productsObjects;
var getItems = function(productsObjects) {
  return item;
}
var shopping = getItems(productsObjects);
console.log("Array of items: ", shopping);

//Part 2: Create getItemsByBrand function that takes in array of items & returns new array of a specific brand.
getItemsByBrand = function (shopping, brand) {
  var box = [];
  for (i = 0; i < item.length; i++) {
    // console.log("brand: ", products.items[i].product.brand);
    if (brand === products.items[i].product.brand) {
      console.log("its true!");
      box.push(products.items[i]);
      // put the item in the box
      //console.log(box);
    }
  }
  return box;
}

var shoppingByBrand = getItemsByBrand(shopping, "Canon");
console.log("Shop by brand: ", shoppingByBrand);


//Part 3: Create getItemsByAuthor function that takes in array of items & returns new array by author name.

getItemsByAuthor = function (shopping, author) {
  var boxAuthor = [];
  for (i = 0; i < item.length; i++) {
    if (author === products.items[i].product.author.name) {
      console.log("author");
      boxAuthor.push(products.items[i]);
      console.log(boxAuthor);
    }
  }
  return boxAuthor;
}

var shoppingByAuthor = getItemsByAuthor(shopping, "CDW");
console.log("Shop by author: ", shoppingByAuthor);

//CPart 4: Create getAvailableProducts function that takes in array of items & returns new array by available products.
getAvailableProducts = function (availability) {
  var boxAvailable = [];
  for (i = 0; i < item.length; i++) {
    if (products.items[i].product.inventories[0].availability === "inStock") {
      console.log("available");
      boxAvailable.push(products.items[i]);
      console.log(boxAvailable);
    }
  }
  return boxAvailable;
}

var shoppingByAvailable = getAvailableProducts(shopping);
console.log("Shop by available: ", shoppingByAvailable);

//Part 5a: output list of items made by Sony.
var itemsSony = getItemsByBrand(shopping, "Sony");
console.log("Sony items: ", itemsSony);

//Part 5b: output list of items made by Sony and that are available
var itemsSonyAvailable = getAvailableProducts(itemsSony);
console.log("Sony items available: " + itemsSonyAvailable);

//Part 5c: all available items by the author Adorama Camera
//getAvailableProducts(getItemsByAuthor())
var itemsAdorama = getItemsByAuthor(shopping, "Adorama Camera");i
var itemsAdoramaAvailable = getAvailableProducts(itemsAdorama);
console.log("Adorama items available:" + itemsAdoramaAvailable);

//Part 5d: output list of items made by Nikon with author eBay.
var itemsNikon = getItemsByBrand(shopping, "Nikon");
var itemsNikonAuthor = getItemsByAuthor(itemsNikon, "eBay");
console.log("Nikon items with eBay author: " + itemsNikonAuthor);









