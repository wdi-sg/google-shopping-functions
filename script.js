//Part5
// var sony = getItemsByBrand(getItems(products), "Sony");

// console.log(sony);

// console.log(getAvailableProducts(sony));

// console.log(getItemsByAuthor(getItems(products), "Adorama Camera"));

// var nikon = getItemsByBrand(getItems(products), "Nikon");

// console.log(getItemsByAuthor(nikon, "eBay"));


//Further
//var itemGlobal = products.items
// var input = prompt("Enter a brand or author to search.(Case Sensitive)");
// var allBrands = [];
// var allAuthors = [];

// for (var i = 0; i < itemGlobal.length; i++) {
//   allBrands.push(itemGlobal[i].product.brand);
//   allAuthors.push(itemGlobal[i].product.author.name)

//   if (input === itemGlobal[i].product.brand ) {
//     console.log(getItemsByBrand(getItems(products), input));
//   } else if (input === itemGlobal[i].product.author.name) {
//     console.log(getItemsByAuthor(getItems(products), input));
//   }

// }

// if (!allBrands.includes(input) && !allAuthors.includes(input)) {
//   console.log("No search result was found");
// }

//LastFurther
var itemGlobal = products.items
var question = prompt("Enter the number to search one of the options below: \n (1) The number of product items \n (2) The country of each item \n (3) Total price of all inventory ")

if (question === "1") {

  console.log(getItems(products));

} else if (question === "2") {

  var itemTitle = [];
  var itemCountry = [];

  for (var i = 0; i < products.items.length; i++) {

    itemTitle.push(products.items[i].product.title);
    itemCountry.push(products.items[i].product.country);

    console.log(itemTitle[i] + "\n " +itemCountry[i]);
  }

} else if (question === "3") {

  var available = getAvailableProducts(getItems(products));
  var sum = 0;

  for (var i = 0; i < available.length; i++) {

    sum += available[i].product.inventories[0].price;
  }

  console.log(sum);

}




























