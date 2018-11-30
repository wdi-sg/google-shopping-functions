//Create a function called `getItems` that simply returns the items array from the google product object.//


var Items = products.items;
var Length = Items.length
var result = [];
var getItems = function ()
{
	//for (var i=0 ;i<Object.keys(products.items).length; i++)
	for (var i=0 ;i<Items.length; i++){
		//if (Items[i].kind === "shopping#product"){
			result.push(Items[i]);
		//}	
		
	}
return result;
 
  //return objectData.items.
}


// Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.
var resultbybrand = [];
var getItemsbyBrand = function (Items,brand)
{
	for (var i=0;i<getItems.length; i++)
	{
        if (getItems[j].product.brand === "Sony")
        {

        	resultbybrand.push("Item is:" + result[j] + "Brand is:" + getItems[k].product.brand);
        }

	}
 return resultbybrand;   
}