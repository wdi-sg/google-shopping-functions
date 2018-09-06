//1
var getItems = function(productData){
  return productData.items; //RETURNS array of items
}

var productsArray = getItems(products); //INPUTS the 'thing' containing the items
console.log(productsArray);

//2
var getItemsByBrand = function(productsArray, brand){
  var brandArray = [];
  for (var i = 0; i<productsArray.length; i++){
    if(brand.toLowerCase() === productsArray[i].product.brand.toLowerCase()){
      brandArray.push(productsArray[i]);
    }
  }
  return brandArray;
}

var brandArray = getItemsByBrand(productsArray, "canon");
console.log(brandArray);

//3
var getItemsByAuthor = function(items, author){
  var authorArray = [];
  for(var i = 0; i<productsArray.length; i++){
    if(author.toLowerCase() === productsArray[i].product.author.name.toLowerCase()){
      authorArray.push(productsArray[i]);
    }
  }
  return authorArray;
}

var authorArray = getItemsByAuthor(productsArray, "Target");
console.log(authorArray);

//4
var getAvailableProducts = function(items){
  var availableProducts = [];
  for(var i = 0; i<productsArray.length; i++){
    if(productsArray[i].product.inventories[0].availability.toLowerCase() === "instock"){
      availableProducts.push(productsArray[i]);
    }
  }
  return availableProducts;
}

var availableProducts = getAvailableProducts(productsArray);
console.log(availableProducts);
