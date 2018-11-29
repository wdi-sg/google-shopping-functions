// 1.) getItems(objectData)
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.
// Note all other functions (below) use the return of this function as their input.

var getItems = function() {
return products.items
}






// 2.) getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
// Test this function by searching for Sony, Canon, Nikon and Panasonic.

getItemsByBrand = function(itemsArray, userInputBrand) {
  var itemsByBrand =[];
  for (i = 0; i < itemsArray.length; i++) {
    var pdtBrand = itemsArray[i].product.brand
    if (pdtBrand.toLowerCase().includes(userInputBrand.toLowerCase())) {
       itemsByBrand.push(itemsArray[i]);
       }
  }
return itemsByBrand;
}


// 3.) getItemsByAuthor(items, author)
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
// Test this function by searching for Target, CDW, eBay

getItemsByAuthor = function(itemsArray, userInputAuthor) {
  var itemsByAuthor =[];
  for (i = 0; i < itemsArray.length; i++) {
    var pdtAuthorName = itemsArray[i].product.author.name
    if (pdtAuthorName.toLowerCase().includes(userInputAuthor.toLowerCase())) {
      itemsByAuthor.push(itemsArray[i]);
    }
  }
return itemsByAuthor;
}





// 4.) getAvailableProducts(items)
// input: an array of items
// returns: an array of items (that are available)
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

getAvailableProducts = function(itemsArray) {
  var availableProducts =[];
  for (var i = 0; i < itemsArray.length; i++) {
     var pdtInv = itemsArray[i].product.inventories;
      for (var j = 0; j < pdtInv.length; j++) {
        if (pdtInv[j].availability === "inStock") {
        availableProducts.push(itemsArray[i]);
        }
      }
  }
return availableProducts;
}















// Further
// Let the user enter in a maximum or minimum price. Only show them items that correspond.

// Further
// Let the user enter in a maximum and minimum price. Only show them items that correspond.
