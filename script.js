
// 1.) getItems(objectData)
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.
// Note all other functions (below) use the return of this function as their input.

function getItems() {
  return products.items;
}
// output item count using the getItemsCount function


// 2.) getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

// Test this function by searching for Sony, Canon, Nikon and Panasonic.
function getItemByBrand(items, Brand){
  var happydays = []
  for (var i = 0; i < items.length; i++){

    if (items[i].product.brand.toLowerCase() === Brand.toLowerCase()){
      happydays.push(getItems()[i])
    }
    // else if(Brand == "all") {
    //   happydays.push(getItems()[i])
    // }
  }
  return happydays
}
// var selectBrand = prompt("Please select brands you want to filter ").toLowerCase();
// if (selectBrand === "q" || selectBrand === "quit"){
//   Console.log("Goodbye!");
// }
// else if (selectBrand === " "){
//   selectBrand = "all"
//   getItemByBrand(getItems(),selectBrand);
// }
// else{getItemByBrand(getItems(),selectBrand);}

// 3.) getItemsByAuthor(items, author)
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
// Test this function by searching for Target, CDW, eBay
// includes("something")
function getItemByAuthor(items, Author){
  var happydays = []
  for (var i = 0; i < items.length; i++){
    if (items[i].product.author.name.toLowerCase().includes(Author)){
      happydays.push(getItems()[i])
    }
    else if(Author === "all") {
      happydays.push(getItems()[i])
    }
  }
  return (happydays)
}
// var selectAuthor = prompt("Please select author (Target, CDW, EBAY)").toLowerCase();
// if (selectAuthor === "q" || selectAuthor === "quit"){
//   Console.log("Goodbye!");
// }
// else if (selectAuthor === " "){
//   selectAuthor = "all"
//   getItemByAuthor(getItems(),selectAuthor);
// }
// else{
//   getItemByAuthor(getItems(),selectAuthor);
// }

// 4.) getAvailableProducts(items)
// input: an array of items
// returns: an array of items (that are available)
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
function getAvailableProducts(){
  var itemAvail = []
  var items = getItems();
  for (i in items){
    if (items[i].product.inventories[0].availability === "inStock"){
      itemAvail.push(getItems()[i])
    }
  }
  // console.log(itemAvail);
  return (itemAvail)
}
// getAvailableProducts()
// console.log(getItemByBrand(getItems(), "Sony"))
// console.log(getItemByBrand(getAvailableProducts(),"canon"))
// console.log(getItemByAuthor(getAvailableProducts(),"Adorama"))
// console.log(getItemByAuthor(getItemByBrand(getItems(),"nikon"),"ebay"))

console.log(getItemByBrand(getItemByAuthor(getAvailableProducts(),"ebay"),"nikon"))

