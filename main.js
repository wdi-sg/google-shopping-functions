var getItems = function(objectData) {
  return objectData.items;
  //items is an array of item Objects
};
items = getItems(products);

function getItemsByBrand(items, brandName) {
  //array which will hold our brand search results
  var brandArray = [];
  for (let i = 0; i < items.length; i++) {
    //brand reseult found in lowercase
    var brandResult = items[i].product.brand.toLowerCase();
    if (brandResult.includes(brandName.toLowerCase())) {
      brandArray.push(items[i]);
    }
  }
  return brandArray;
}

function getItemsByAuthor(items, authorName) {
  var authorArray = [];
  for (let i = 0; i < items.length; i++) {
    //author reseult found in lowercase
    var authorResult = items[i].product.author.name.toLowerCase();
    if (authorResult.includes(authorName.toLowerCase())) {
      authorArray.push(items[i]);
    }
  }
  return authorArray;
}

function getAvailableProducts(items) {
  var availableArray = [];
  for (let i = 0; i < items.length; i++) {
    //author reseult found in lowercase
    var availableResult = items[i].product.inventories[0].availability.toLowerCase();
    if (availableResult.includes("instock")) {
      availableArray.push(items[i]);
    }
  }
  return availableArray;
}
