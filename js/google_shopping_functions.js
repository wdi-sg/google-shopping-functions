
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
 /* part 1 */
  function getItemsCount(itemData) {
    return itemData.items.length;
  }

  function getItems(objectData){
    return objectData.items;
  }

  function getItemsByBrand(items , brand){

    var searchResults = [];

    for(var i=0;i<items.length;i++){

      if(items[i].product.brand===brand){

        searchResults.push(       items[i]      );
      }
    }
    return searchResults;
  }

  function getItemsByAuthor(items, author){

    var searchResults2 = [];

for(var i = 0; i<items.length; i++){
        if(items[i].product.author.name===author){

        searchResults2.push(items[i]);
      }
  }
  return searchResults2;
}

function getAvailableProducts(items){
var searchResults3 = [];

for(var i = 0; i<items.length; i++){
        if(items[i].product.inventories[0].availability==="inStock"){

        searchResults3.push(items[i]);
      }
  }
  return searchResults3;
}


/*
 * Define and use your functions here
 */

//  output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(products));

