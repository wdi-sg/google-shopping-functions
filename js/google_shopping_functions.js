
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
function getItems(objectData)
{
	for(1=0; 1< objectData.items.length; i++)
	{
		return objectData.items[i];
	}
}

getItems(products);




// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

