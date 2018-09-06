
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

 //part 1
function getItemsCount(itemData) {
  return itemData.items.length;
}

var count = 0;
for( var i=0; i<products.items.length; i++){
   //console.log( products.items[i].id);

   var item = products.items[i];

   if( item.kind === "shopping#product" ){
     count++;

   }

 }

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(products));



