//1
var getItems = function(productData){
  return productData.items; //RETURNS array of items
}

//var productsArray = getItems(products); //INPUTS the 'thing' containing the items
//console.log(productsArray);

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

//var brandArray = getItemsByBrand(productsArray, "canon");
//console.log(brandArray);

//3
var getItemsByAuthor = function(items, author){
  var authorArray = [];
  for(var i = 0; i<productsArray.length; i++){
    if(productsArray[i].product.author.name.includes(author)){
      authorArray.push(productsArray[i]);
    }
  }
  return authorArray;
}

//var authorArray = getItemsByAuthor(productsArray, "eBay");
//console.log(authorArray);

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

//var availableProducts = getAvailableProducts(productsArray);
//console.log(availableProducts);

//5
//All items made by Sony.
/*
var productsArray = getItems(products);
var sonyBrandArray = getItemsByBrand(productsArray, "Sony");
console.log(sonyBrandArray);
*/

//All items made by Sony that are available.
/*
var productsArray = getItems(products);
var availableProducts = getAvailableProducts(productsArray);
var availableSonyArray = getItemsByBrand(availableProducts, "Sony");
console.log(availableSonyArray);
*/

//All available items by the author "Adorama Camera"
/*
var productsArray = getItems(products);
var availableAdoramaArray = getItemsByAuthor(productsArray, "Adorama Camera");
console.log(availableAdoramaArray);
*/

//All items made by Nikon with the author eBay.

var productsArray = getItems(products);
var nikonBrandArray = getItemsByBrand(productsArray, "Nikon");
var nikonEbayArray = getItemsByAuthor(nikonBrandArray, "eBay")
console.log(nikonEbayArray);
