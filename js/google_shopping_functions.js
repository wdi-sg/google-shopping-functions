// 1.) Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

var totalNumOfItem=products.items;

function numItem(){
	var count=0; //initializing
	for(i=0;i<totalNumOfItem.length;i++){
		if((products.items)[i].kind=="shopping#product"){
			count+=1;// count increase by 1 when true
		}
	}
	console.log('Number of inventory is:'+' '+count);// Print count
}
numItem();

// 2.) Print the `title` of all items with a `backorder` availability in `inventories`.

function titleItem(){
//check if item has backorder availabilty
	var allTitle=[];
	for(i=0;i<totalNumOfItem.length;i++){
		if(totalNumOfItem[i].product.inventories[0].availability=="backorder"){
			var productTitle = products.items[i].product.title;
			allTitle.push(productTitle);
		}// checking if the availability same as backorder, if it is, print the title
	}
	console.log('Items that are backorder is:'+' '+allTitle);
}
titleItem()

// 3.) Print the `title` of all items with more than one image link.

function imgItem(){
	var moreThanOne = [];
	for(i=0;i<totalNumOfItem.length;i++){
		if(totalNumOfItem[i].product.images.length>1){
			moreThanOne.push(products.items[i].product.title);
		}// finding it the .length of the images are more than 1, if it is print the title
	}
	console.log('Items with more than one image link:'+' '+moreThanOne);
}
imgItem()

// 4.) Print all "Canon" products in the items (careful with case sensitivity).

function canonItem(){
	var canonAll = [];
	for(i=0;i<totalNumOfItem.length;i++){
		var canonMatch = totalNumOfItem[i].product.title;
		var testMatch = canonMatch.split(" ");
		for(x=0;x<testMatch.length;x++){
			if(testMatch[x]==='canon'|testMatch[x]==='Canon'){
				canonAll.push(canonMatch)
			}
		}
	}
	console.log('The list of Canon products:'+' '+canonAll);
}
canonItem()

// 5.) Print all `items` that have an author name of "eBay" and are brand "Canon".

function authorItem() {
	var auth = [];
	for(i=0;i<totalNumOfItem.length;i++){
		if(totalNumOfItem[i].product.author.name === 'eBay'){
			if(totalNumOfItem[i].product.brand ==='Canon'){
				auth.push(products.items[i].product.title);
			}
		}
	}
	console.log('Items that have an author name of "eBay" and are brand "Canon":' +' '+auth);
}
authorItem();
// // 6.) Print all the products with their **brand**, **price**, and an **image link**

function printAll(){
	for(i=0;i<totalNumOfItem.length;i++){
		var keyItems = totalNumOfItem[i].product;
		console.log('The brand of the product is '+' '+ keyItems.brand);
		console.log('The price is' + ' ' + keyItems.inventories[0].price);
		for(x=0;x<keyItems.images.length;x++){
			console.log(keyItems.images[x].link);
		}
	}
}
printAll()