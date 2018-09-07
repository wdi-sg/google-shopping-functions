
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

 // part 1
 var getItems = function() {
   return product.items
 }

//return objectData.items
//}

//Part 2
 var getItemsByBrand = function(items, brand) {
   var itemsByBrand = [];
   for (var i = 0; i < items.length; i++) {
     if(items[i].product.brand === "Canon") {
       itemsByBrand.push(items[i]);
     }
   }
   return itemsByBrand;
 };

//part 3

function getItemsByAuthor(items,author){
   var array = [];
   for (var i=0; i<items.length;i++){
     if ( items[i].product.author.name.includes(author)) {
       array.push(items[i]);
     }
   }
     return array;
 }




