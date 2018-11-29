
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

//1

function getItems(itemData) {
  return products.items;
}

//2
//items = products.item

function getItemsByBrand(items,brand) {
  var itemArray = [];

  for (var i=0 ;i < products.items.length;i++){
    if (products.items[i].products.brand == brand){
      itemArray.push(products.items[i].product.title);
    }


  }

  return itemArray;
}

//3

function getItemsByAuthor(items,author) {
  var authorArray = [];

    for (var i=0 ;i < products.items.length;i++){
    if (products.items[i].products.author[0] == author){
      itemArray.push(products.items[i].product.title);
      return authorArray;
    }
  }
}

//4

function getAvailablePoints(items){

  var availabilityArray = [];

  for (var i=0 ;i < products.items.length;i++){
    if (products.items[i].products.inventories[0].availability == "inStock"){
      availabilityArray.push(products.items[i].product.title);
      return availabilityArray;
    }
}

var items = getItems(products);
var cannonItems = getItemsByBrand(items,"Cannon");
console.log(cannonItems);

