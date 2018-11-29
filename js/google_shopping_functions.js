
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItems(products) {

return products.items;

}


function getItemsByBrand(items, brand)  {

  var searchByBrand = [];

  for (i=0; i < items.length; i++ ){

      if (items[i].product.brand === brand) {

      searchByBrand.push(items[i].product.title);

      }
  }   return searchByBrand;
}


function getItemsByAuthor(items, author){

  var searchByAuthor = [];

  for (i=0; i < items.length; i++) {

      if (items[i].product.author.name === author){

      searchByAuthor.push(items[i].product.title);

      }
  }   return searchByAuthor;
}


//Function get availability of products
function getAvailableProducts(items){
  //empty array to store "inStock" product title

  var searchByAvailability = [];

  for (i=0; i < items.length; i++) {

      var inventories = items[i].product.inventories;
      for(j=0; j < inventories.length; j++) {

          if (inventories[j].availability === "inStock")  {

          searchByAvailability.push(items[i].product.title);

          }
      }
  }    return searchByAvailability;
}



