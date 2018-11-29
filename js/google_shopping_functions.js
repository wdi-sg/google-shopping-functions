// This returns the array of items in the products.js JSON object
function getArray(jsonObj) {
  var array = jsonObj.items;
  return array
}

//This returns an array with items that match the brand
function getItemsByBrand(items, brand){
  var resultArray = []
  for (var item in items){
    if (items[item].product.title.toLowerCase().includes(brand.toLowerCase())){
      resultArray.push(items[item])
    }
  }
  return resultArray
}

//This returns an array with items that match the author's name
function getItemsByAuthor(items, author){
  var resultArray = []
  for (var item in items){
    if (items[item].product.author.name.toLowerCase().includes(author.toLowerCase())){
      resultArray.push(items[item])
    }
  }
  return resultArray
}

//This returns an array with all the "available" products in an array
function getAvailableProducts(items){
  var resultArray = []
  for (var item in items){
    if (items[item].product.inventories[0].availability === "inStock"){
      resultArray.push(items[item])
    }
  }
  return resultArray
}

//This prints all the names of products in an array into the console
function printProducts(items){
  for (var item in items){
    console.log(items[item].product.title)
  }
}

//This returns an array with items that have a name which contain the keyword
function getItemsByName(items, keyword){
  var resultArray = []
  for (var item in items){
    if (items[item].product.title.toLowerCase().includes(keyword.toLowerCase())){
      resultArray.push(items[item])
    }
  }
  return resultArray
}


