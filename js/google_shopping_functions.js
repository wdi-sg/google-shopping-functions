
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }

/*
 * Define and use your functions here
 */

 function getItems(objectData){
  console.log("Get items array");
  return objectData.items;
}

function getItemsByBrand(array, brandName){
  var brandArray = [];
 for (var i = 0; i< array.length;i++ ){
  if(array[i].product.brand == brandName){
    brandArray.push(array[i]);
    }else{
      //do nothing;
    }
 }
  console.log(brandArray);
  return(brandArray);
}

function getItemsByAuthor(array, brandAuthor){
  var authorArray = [];
  for (var i = 0; i < array.length; i++){
    if (array[i].product.author.name.includes(brandAuthor)){
      authorArray.push(array[i]);
    }
  }
  console.log(authorArray);
  return(authorArray);
}

//NOT WORKING YET
function getAvailableProducts(array, availableProducts){
  var availableArray = [];
  for (var i = 0; i < array.length; i++){
    if (array[i].product.inventories[0].availability == availableProducts){
      availableArray.push(array[i]);
    }
  }
  console.log(availableArray);
  return(availableArray);
}

// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

