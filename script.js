// for(var i=0; i<products.items.length; i++){
//  if(products.items[i].product.inventories[0].availability==="backorder"){
//     //console.log(products.items[i].product.title);
//   };
// if (products.items[i].product.images.length > 1){
//   //console.log("products with more than one image",products.items[i].product.title);
// };
// if (products.items[i].product.brand === "Canon"){
//   //console.log("Canon",products.items[i].product.title);
// };
// if (products.items[i].author === "eBay","Canon"){
//   //console.log("eBay",products.items[i]);
// }
// if (products.items[i].product === "brand","price","image"){
//   console.log(products.items[i].product);
//   console.log(products.items[i].product.brand);
//   console.log(products.items[i].product.images);
//   console.log(products.items[i].product.inventories[0].price);
// }
// }
var getItems = function(products){
  return products.items;
}
var productsArray = getItems(products);
console.log(productsArray);
var getItemsByBrand = function(items,brand){
  var newItems =[];
  for(var i=0; i<items.length; i++){
    if(items[i].product.brand == brand){
      newItems.push(items[i].product.title);
    }
  }return newItems;
}

console.log("4")
//to find products by specific author
//supposed to give back a list of products
var getItemsByAuthor = function(items,author){

  console.log("2");

  var newAuthor =[];

//a loop to scan through the list
  for(var j=0; j<items.length; j++){
// console.log(items[j])
// debugger;
    /*

    to check if the specific author of the product in the current iteration of the list matches the parameter

    */
    if(items[j].product.author.name == author){

      // console.log("ll");

      newAuthor.push(items[j].product);
      // when a matching author is found,
      //add the matches to a list
    }
  }

  return newAuthor;
};

console.log("3")
var productsFromTarget = getItemsByAuthor(productsArray,"Target");
//var productsFromSony = getItemsByAuthor(productsArray,"Sony");
console.log(productsFromTarget);
console.log("1")

var getAvailableProducts = function(items)



 for(var i=0; i<products.items.length; i++)

  if(products.items[i].product.inventories[0].availability==="inStock"

