// 1.Create a function called getItems that simply returns the items array from the google product object.
//function is meant to be dynamic, can be called from various places

function getItems(obj) {
  var newArray = [];
  for (i = 0; i < obj.items.length; i++) {
    newArray.push(obj.items[i]);
  };
  return newArray;
}

// getItems(products);

getItemsByBrand(getItems(products), 'Sony')

// 2. Create a function called getItemsByBrand that takes an item array and returns a new array of all items of a specified brand.

function getItemsByBrand(items, specifiedBrand) {
  var items = items
  var result = []
  for (i = 0; i < items.length; i++) {
    if (items[i].product.brand === specifiedBrand) {
      result.push(items[i]);
    }
  }
  return result;
}

// getItemsByBrand(specifiedBrand);

// 3. Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

function getItemsByAuthor(specifiedAuthor) {
  var items = products.items
  var result = [];
  for (i = 0; i < items.length; i++) {
    if (products.items[i].product.author.name === specifiedAuthor) {
      result.push(products.items[i]);
    }
  }
  return result;
}
// getItemsByBrand(specifiedAuthor);

// 4. Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
function getAvailableProducts(availability) {
  var items = products.items
  var result = []
  for (i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === "inStock")
      result.push(items[i].product);
  }
  return result;
}

// getItemsByBrand(availability);
