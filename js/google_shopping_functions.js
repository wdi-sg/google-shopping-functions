/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
//  */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }


//  * Define and use your functions here


// // output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));


// Part 1 getItems(objectData)

function getItem(objectData){
  var array = [];
  for (var i=0; i<objectData.items.length;i++){
    array.push(objectData.items[i]);
  }
  return array;
}


// Part 2 getItemsByBrand(items, brand)

function getItemsByBrand(items,brand){
  var array = [];
  for (var i=0; i<items.length;i++){
    if (items[i].product.brand == brand){
      array.push(items[i]);
    }
  }
    return array;
}

// Part 3 getItemsByAuthor(items, author)

function getItemsByAuthor(items,author){
  var array = [];
  for (var i=0; i<items.length;i++){
    if ( items[i].product.author.name.includes(author)) {
      array.push(items[i]);
    }
  }
    return array;
}

// Part 4 getAvailableProducts(items)

function getAvailableProducts(items) {
  var array = [];
  for (var i = 0; i < items.length; i++) {
    if ( items[i].product.inventories[0].availability == "inStock" ) {
      array.push(items[i]);
    }
  }
    return array;
}

function further1() {
  console.log(itemArray.length);
}

function further2() {
  countryArray = [];
  for (var i = 0; i < itemArray.length; i++) {
    countryArray.push(itemArray[i].product.country);
  } console.log(countryArray);
}

function further3() {
  totalPrice = 0;
  for (var i = 0; i < itemArray.length; i++) {
    totalPrice = totalPrice + itemArray[i].product.inventories[0].price;
  } console.log(totalPrice);
}
