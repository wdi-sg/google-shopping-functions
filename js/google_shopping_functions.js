
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
//function getItemsCount(itemData) {
//  return itemData.items.length;
// }

/*
 * Define and use your functions here
 */

 //1) Create a function called getItems that simply returns the items
 //array from the google product object.


var getItems = function (productAll){

  return productAll.items;
}

// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));



//2) Create a function called getItemsByBrand that takes an item
//array returns a new array of all items of a specified brand.

var getItemsByBrand = function (items, brandName){

  var itemsName = [];
var count = 0;

for (var i=0; i<items.length; i++){
if (items[i].product.brand === brandName ){
itemsName.push(items[i]);
count ++;
}
}return itemsName;
}


//3) Create a function called getItemsByAuthor that takes an item
//array and returns a new array of all items by a specified author.

var getItemsByAuthor = function (items, authorName){

var authorsList = [];

for (var i=0; i<items.length; i++){
  if (items[i].product.author.name.toLowerCase().includes(authorName) ){
    authorsList.push(items[i]);
  }
}return authorsList;
}


//4) Create function called getAvailableProducts that takes an item array
//and returns an array containing all of the available products
//(an available product is one with at least one availability of "inStock" in the inventories array)


var getAvailableProducts = function(items){

  var availableProds = [];

  for (var i=0; i<items.length; i++){
    var allAvail = items[i].product.inventories[0].availability;
    if (allAvail.toLowerCase() === "instock"){
availableProds.push(items[i]);
    }
} return availableProds;
}


var getItemsCount = function (items){
  return items.length;
}

var getCountry = function (items, countryName){
  var countryNames = [];
for (var i=0;i<items.length; i++){
  if(items[i].product.country.toLowerCase().includes(countryName)){
    countryNames.push(items[i]);
  }
} return countryNames;
}



var getPrice = function(items){
  var totalPriceArr = [];
  var sum = 0;
  for (var i=0; i<items.length; i++){

    if(items[i].product.inventories[0].price !== null){
    totalPriceArr.push(items[i].product.inventories[0].price);
    var totalPrice = sum += totalPriceArr[i];
  }
  } return totalPrice.toFixed(2);

}







