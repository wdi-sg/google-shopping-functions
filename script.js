console.log(products.items.length);

// var prodItem = products.items;
// var brand = prodItem[i].product.brand;
// var title = products.items[i].product.title;
// var author = prodItem[i].product.author.name;
// var hasName = author.search("eBay");
// var imgLink = prodItem[i].product.images[0].link;
// var condition = prodItem[i].product.condition;


/************************************/
var counter =1;
var userInputBrand = "sony".toLowerCase();
var userInputAuthor ="ebay".toLowerCase();

console.log(userInputBrand);
console.log(userInputAuthor);

 // 1.) getItems(objectData)
function getItems(input) {

    var prodItem = input.items;
    return prodItem;

}



/************************************/

// ## 2.) getItemsByBrand(items, brand)
function getItemsByBrand(items, brand) {
var outDetails = [];
    for (var i = 0; i < items.length; i++) {
      if((items[i].product.brand).toLowerCase() == brand) {
        // outDetails.push(counter++ + ")" + " " + "Model: " + items[i].product.title)
        // console.log(counter++ + ")" + " " + "Model: " + items[i].product.title)
          outDetails.push(items[i]);
      }
    }
return outDetails;
}

/************************************/

//## 3.) getItemsByAuthor(items, author)
//if indexOf > 0

function getItemsByAuthor(items, author) {
var outAuthor = [];
    for (var i = 0; i <items.length; i++) {
      var n = items[i].product.author.name.toLowerCase();
      if(n.search(author) >= 0) {
        // outAuthor.push("Author: " + items[i].product.author.name + ", " + "Model: " + items[i].product.title);
        outAuthor.push(items[i]);
      }
    }
return outAuthor;
}
// (counter++ + ")" + " " + "Model: " + items[i].product.title + ", " + "Author: " + items[i].product.author.name)
//to print stuff

/************************************/

//## 4.) getAvailableProducts(items)
// products.items[1].product.inventories[0].availability

function getAvailableProducts(items) {
var availableArr =[];
    for (var i = 0; i < items.length; i++) {
      var n = items[i].product.inventories[0].availability.toLowerCase();
      if(n == "instock") {
        // availableArr.push(items[i]);
        availableArr.push(items[i]);

      }
    }
return availableArr
}


// getItems(products);
// console.log(getItemsByBrand(getItems(products), userInputBrand));
// console.log(getItemsByAuthor(getItems(products),userInputAuthor));
// console.log(getAvailableProducts(getItems(products)));

//5.1) sony items
console.log(getItemsByBrand(getItems(products), "sony"));

 // 5.2) Sony and available
console.log(getItemsByBrand(getAvailableProducts(getItems(products)), "sony"));

// 5.3) available, author "adorama"
console.log(getAvailableProducts(getItemsByAuthor(getItems(products),"adorama")));

//5.4) nikon all and author ebay
console.log(getItemsByBrand(getItemsByAuthor(getItems(products),"ebay"), "nikon"));

/*
5/ Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.

* All items made by Sony.
* All items made by Sony that are available.
* All available items by the author "Adorama Camera"
* All items made by Nikon with the author eBay.
*/
