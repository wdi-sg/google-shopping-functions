
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
/*function getItemsCount(itemData) {
  return itemData.items.length;
}
*/

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));

//1

function getItems(itemData) {
  return products.items;
}

//2
//items = products.item

function getItemsByBrand(items,brand) {
  var itemArray = [];

  for (var i=0 ;i < products.items.length;i++){
    if (products.items[i].product.brand == brand){
      itemArray.push(products.items[i].product.title);
    }
  }
  return itemArray;
}

//3
function getItemsByAuthor(items,author) {
  var authorArray = [];

    for (var i=0 ;i < products.items.length;i++){
    if (products.items[i].product.author[0] == author){
      itemArray.push(products.items[i].product.title);
    }
  }
  return authorArray;
}

//4
function getAvailableProducts(items){

  var availabilityArray = [];

  for (var i=0 ;i < products.items.length;i++){
    if (products.items[i].product.inventories[0].availability == "inStock"){
      availabilityArray.push(products.items[i].product.title);
    }
  }
  return availabilityArray;
}

var items = getItems(products);
var canonItems = getItemsByBrand(items,"Canon");
console.log(canonItems);

// var sonyItems = getItemsByBrand(items,"Sony");
// var sonyAvail = getAvailableProducts(sonyItems);
// console.log(sonyItems);
// console.log(sonyAvail);

// var AdoramaCam = getItemsByAuthor(items,"Adorama Camera");
// var nikonItems = getItemsByBrand(items,"Nikon");
// var nikonOnEbay = getItemsByAuthor(nikon,"eBay");




