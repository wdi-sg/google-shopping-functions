//Create a function called getItems that simply returns the items array from the google product object.
var getItems=function()
{
	return products.items;
}
var items= getItems(products);
//PART 2
//Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
var getItemsByBrand= function(items,brand)
{
	var identicalBrand = [];
	for(var i=0;i< items.length;i++)
	{
		if(items[i].product.brand.toLowerCase() === brand.toLowerCase())
		{
			identicalBrand.push(items[i])
		}
	}
	return identicalBrand;
}
var brands= getItemsByBrand(getItems(),'Sony');
//PART 3
//Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
var getItemsByAuthor= function(items,author)
{
	var identicalAuthor = [];
	for(var i=0;i< items.length;i++)
	{
		if(items[i].product.author.name.toLowerCase().includes(author.toLowerCase()))
		{
			identicalAuthor.push(items[i])
		}
	}
	return identicalAuthor;
}
//var authors= getItemsByAuthor(getItems(),'Adorama');
//console.log(authors)
//PART 4
//Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
var getAvailableProducts= function(items)
{
	var availableStock= [];
	for(var i=0;i<items.length;i++)
	{
	if(products.items[i].product.inventories[0].availability == "inStock")
	{
		availableStock.push(items[i])
	}
	}
	return availableStock;
}

//PART 5
//All items made by Sony
var sonyProducts= getItemsByBrand(getItems(),"Sony");
console.log(sonyProducts);

//All items made by Sony and available
var sonyavailableProducts= getAvailableProducts(sonyProducts)
console.log(sonyavailableProducts)
//All available items by the author "Adorama Camera"
var availableAuthor= getAvailableProducts(getItemsByAuthor(getItems(),"Adorama Camera"))
console.log(availableAuthor)
//All items made by Nikon with the author ebay
var nikonProducts= getItemsByBrand(getItems(), "Nikon")
console.log(getItemsByAuthor(nikonProducts, "ebay"))
