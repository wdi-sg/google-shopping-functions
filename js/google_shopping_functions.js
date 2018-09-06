
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }


//  * Define and use your functions here


// // output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

//part 1
function getItem(objectData){
  var array = [];
  for (var i=0; i<objectData.items.length;i++){
    array.push(objectData.items[i]);
  }
  return array;
}

var items = getItem(products);

//part 2 - linked from part 1
function getItemsByBrand(items,brand){
  var array = [];
  for (var i=0; i<items.length; i++){
    if(items[i].product.brand == brand){
      array.push(items[i]);
    }
  }
  return array;
}
//part 3
function getItemsByAuthor(items,author){
  var array = [];
  for (var i=0; i<items.length; i++){
    if(items[i].product.author.name == author){
      array.push(items[i]);
    }
  }
  return array;
}

//part 4
function getAvailableProducts(items){
  var array = [];
  for (var i=0; i<items.length;i++){
    if(items[i].product.inventories[0].availability == "inStock"){
      array.push(items[i]);
    }
  }
  return array;
}
//part 5
// var itemSony = getItemsByBrand(items,'Sony');
// var itemSonyAvail = getAvailableProducts(itemSony);
// var itemsAvail = getAvailableProducts(items);
// var itemsAdorama = getItemsByAuthor(itemsAvail, 'Adorama Camera');
// var itemsNikon = getItemsByBrand(items,'Nikon');
// var itemsNikonEbay = getItemsByAuthor(itemsNikon, 'eBay');

// //part 6 and 7
// var searchId = prompt('what category do you want to search for');

// function search(searchId){
//   var searchTerms = ["availability","brand","author"];
//   var count = 0;
//   for (var i=0;i<searchTerms;i++){
//     if(searchTerms[i] == searchId){
//       count +=1;
//     }
//   }
//   if (count ==0){
//     alert('there is no such search term');
//   }
// }

// search(searchId);

//part 8
var noOfProductItems = prompt('1. the number of product items \n 2. The country of each item \n 3. Total price of all invetory \n 4. Search for one of the things above');

function noOfItems(items){
  console.log(items.length);
  return items.length;
}
function countryOfItem(items){
  for (var i =0; i<items.length;i++){
    console.log(items[i].product.title+" from "+items[i].product.country);
  }
}
function totalPriceOfAllInventry(itemsAvail){
  var totalPrice =0;
  for (var i =0;i<itemsAvail.length;i++){
    totalPrice += itemsAvail[i].product.inventories[0].price;
  }
  console.log(totalPrice);
  return totalPrice;
}

function bamBam(a){
  if (a == 1){
    noOfItems(items);
  }
  else if (a == 2){
    countryOfItem(items);
  }
  else if (a == 3){
    totalPriceOfAllInventry(itemsAvail);
  }
}

bamBam(noOfProductItems);
