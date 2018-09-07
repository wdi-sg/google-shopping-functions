console.log("Hello!")
/*
  1. getItems(objectData)
      Create a function called `getItems` that simply returns the items array from the google product object.

*/

var getItems = function(){

  return products.items
}

getItems()
var arrayOfItems = getItems();




/*
  2. getItemsByBrand(items, brand)
  Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.

  Test this function by searching for Sony, Canon, Nikon and Panasonic.

*/

var getItemsByBrand = function(userInputBrand, getItems){

    var arrayOfItemsByBrand = [];
    for (i = 0; i < getItems.length; i++){

      var item = getItems[i];
      var brandOfItem = item.product.brand

      if (userInputBrand === brandOfItem){
        arrayOfItemsByBrand.push(item);
      }

    }

    return arrayOfItemsByBrand

}

console.log(getItemsByBrand("Sony", getItems()));

/*
  3.) getItemsByAuthor(items, author)
  Create a function called `getItemsByAuthor` that takes an item array and returns a new array of all items by a specified author.
  Test this function by searching for Target, CDW, eBay
*/


var getItemsByAuthor = function(userInputAuthor, getItems){

    var arrayOfItemsByAuthor = [];
    for (i = 0; i < arrayOfItems.length; i++){
        var item = arrayOfItems[i];
        var AuthorNameOfItem = item.product.author.name

        if (userInputAuthor === AuthorNameOfItem){
          arrayOfItemsByAuthor.push(item);
        }

        else if (AuthorNameOfItem.includes(userInputAuthor)){
          arrayOfItemsByAuthor.push(item);
        }

    }

    return arrayOfItemsByAuthor;
}




/*
  4.) getAvailableProducts(items)
  Create function called `getAvailableProducts` that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

*/


var getAvailableProducts = function(userInputAvailability, getItems){
     var arrayOfAvailableProduct = [];
    for (i = 0; i < arrayOfItems.length; i++){
        var item = arrayOfItems[i];
        var availabilityItem = item.product.inventories[0].availability;

        if (userInputAvailability === availabilityItem){
          arrayOfAvailableProduct.push(item);
        }
    }

    return arrayOfAvailableProduct;
}




/*
  5.) Use your functions
      Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
*/

//All items made by Sony.
console.log(getItemsByBrand("Sony", getItems()));

//All items made by Sony that are available.
console.log(getAvailableProducts("inStock", getItems()));

//All available items by the author "Adorama Camera"
console.log(getItemsByAuthor("Adorama Camera", getItems()));


//All items made by Nikon with the author eBay.

function getItemsByAuthorBrand (userInputBrand, userInputAuthor, getItems){
          //this function takes in the result of "getItemsByBrand" which is already sorted by brand as an argument and executes the "getItemsByAuthor" function
          console.log(getItemsByAuthor(userInputAuthor, getItemsByBrand(userInputBrand, getItems)))
//housed both functions in a single function with 3 arguments

}
getItemsByAuthorBrand("Sony", "eBay", getItems())


/*
Further

Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:

1) The number of product items

2) The country of each item

3) Total price of all inventory

4) Search for one of the things above
*/


var userChoice = prompt("What would you like to do? \n Enter choice \n 1- To know the number of products\n 2- To know the country of each item\n 3- To know the total price of all inventory")

if (userChoice === "1"){
  console.log("There are " + getItems().length + " products");
}
else if (userChoice === "2"){

          for (i = 0; i < arrayOfItems.length; i++){
            var item = arrayOfItems[i];
            var countryOrigin = item.product.country
            console.log(item + " is from " + countryOrigin)
          }
}

else if (userChoice === "3"){
          var totalPrice = 0

          for (i = 0; i < arrayOfItems.length; i++) {
            var item = arrayOfItems[i];
            var price = item.product.inventories[0].price;

            totalPrice += price;
          }
          console.log(totalPrice);
}












