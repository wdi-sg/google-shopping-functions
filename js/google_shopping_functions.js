// REMEMBER: data should be passed in to the function as arguments and out as a return value.
// DO NOT access/modify variables defined outside of the function.

// 1.) getItems(objectData)
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.

function getItems (itemData) {
  return itemData.items;
}

// 2.) getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//
// Test this function by searching for Sony, Canon, Nikon and Panasonic.

function getItemsByBrand (items, brandName) {

  var brandArray = [];
  var brandNameCase = brandName.toLowerCase()

  for (var i = 0; i < items.length; i++) {

    if (items[i].product.brand.toLowerCase() === brandNameCase) {

      brandArray.push(items[i]);

    }
  }
  return brandArray;
}
