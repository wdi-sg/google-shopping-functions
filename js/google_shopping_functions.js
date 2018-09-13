// 1.Create a function called getItems that simply returns the items array from the google product object.
//function is meant to be dynamic, can be called from various places

var getItems = function(obj) {
  return products.items
}

// console.log(getItems(products))

var itemsList = getItems(products);

// // 2. Create a function called getItemsByBrand that takes an item array and returns a new array of all items of a specified brand.

var getItemsByBrand = function(itemsInput, specifiedBrand) {
  var brandArray = [];
  for (var i = 0; i < itemsInput.length; i++) {
    if (itemsInput[i].product.brand === specifiedBrand) {
      brandArray.push(itemsInput[i]);
    }
  }
  return brandArray
}

// //Test this function by searching for Sony, Canon, Nikon and Panasonic.

console.log(getItemsByBrand(itemsInput,"Sony"))
console.log(getItemsByBrand(itemsInput,"Canon"))
console.log(getItemsByBrand(itemsInput,"Nikon"))
console.log(getItemsByBrand(itemsInput,"Panasonic"))

// 3. Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

var getItemsByAuthor = function (itemsInput, specifiedAuthor) {
    var authorArray = [];
    for (var i = 0; i < itemsInput.length; i++) {
      if (itemsInput[i].product.author.name === specifiedAuthor) {
      authorArray.push(itemsInput[i]);
    }
  }
  return authorArray
}

// // Test this function by searching for Target, CDW, eBay
// console.log(getItemsByAuthor(getItems(products),"Target"))
// console.log(getItemsByAuthor(getItems(products),"CDW"))
// console.log(getItemsByAuthor(getItems(products),"eBay"))

// // 4. Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

var getAvailableProducts = function (itemsInput) {
  var availableProductsArray = [];
  for (var i = 0; i < itemsInput.length; i++) {
    if (itemsInput[i].product.inventories[0].availability === "inStock") {
      availableProductsArray.push(itemsInput[i].product);
    }
  }
  return availableProductsArray
}
