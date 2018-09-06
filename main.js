// Q1
var getItems = function(objectData) {
  console.log(products.items)
  return products.items
    }
var mainArray = getItems();



// Q2 (Test this function by searching for Sony, Canon, Nikon and Panasonic.)

var getItemsByBrand = function(userInputBrand) {
  for (var i = 0; i < mainArray.length; i++) {
    var brandArray = [];
    var item = mainArray[i]
    var brandName = item.product.brand
      if (userInputBrand === brandName) {
        brandArray.push(item);
        console.log(brandArray);
      }
  }
}

// Q3 (Test this function by searching for Target, CDW, eBay)


var getItemsByAuthor = function(userInputAuthor) {
  for (var i = 0; i < mainArray.length; i++) {
    var authorArray = [];
    var item = mainArray[i];
    var authorName = item.product.author.name;
      if (userInputAuthor === authorName) {
      authorArray.push(item);
      console.log(authorArray)
      }
  }
}


// Q4 An available product is one with at least one availability of "inStock" in the inventories array

var getAvailableProducts = function() {
  for (var i = 0; i < mainArray.length; i++) {
    productAvailArray = [];
    var item = mainArray[i];
    var productAvailability = item.product.inventories[0].availability;
      if (productAvailability === "inStock") {
      productAvailArray.push(item);
      console.log(productAvailArray);
      }

  }
}

// 5.1
getItemsByBrand("Sony");





