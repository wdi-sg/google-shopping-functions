  //1) Create a function called getItems that simply returns the items
 //array from the google product object.
var items = getItems(products);
console.log(items);
console.log(" ");
/*

//2) Create a function called getItemsByBrand that takes an item array
//returns a new array of all items of a specified brand.

//Test this function by searching for Sony, Canon, Nikon and Panasonic.

console.log(getItemsByBrand(items, "Nikon"));
console.log(getItemsByBrand(items, "Sony"));
console.log(getItemsByBrand(items, "Canon"));
console.log(getItemsByBrand(items, "Panasonic"));
console.log(" ");


//3) Create a function called getItemsByAuthor that takes an item
//array and returns a new array of all items by a specified author.
//Test this function by searching for Target, CDW, eBay

console.log(getItemsByAuthor(items, "target"));
console.log(getItemsByAuthor(items, "cdw"));
console.log(getItemsByAuthor(items, "ebay"));
console.log(" ");


//4) Create function called getAvailableProducts that takes an item array
//and returns an array containing all of the available products
//(an available product is one with at least one availability of "inStock" in the inventories array)
console.log(getAvailableProducts(items, "inStock"));
console.log(" ");


//5) Use your functions
//Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.

//All items made by Sony.
console.log(getItemsByBrand(items, "Sony"));

//All items made by Sony that are available.
console.log(getAvailableProducts(getItemsByBrand(items, "Sony")));

//All available items by the author "Adorama Camera"
console.log(getItemsByAuthor(items, "adorama camera"));

//All items made by Nikon with the author eBay.
console.log(getItemsByAuthor(getItemsByBrand(items, "Nikon"), "ebay"));
*/


//Further

var message = prompt(`Please enter one of the following search term: Brand, Author, Country \n
  For employees, enter "Total" to get total inventory info.`);

var userInput = message.toLowerCase();

if (userInput === "brand"){

  var messageBrand = prompt(`Please enter brand name to search. \n
    Nikon, Sony, Canon, Panasonic`);
  var inputBrand = messageBrand.charAt(0).toUpperCase() + messageBrand.slice(1);

console.log("Available items are: " + getItemsByBrand(items, inputBrand));
console.log("Number of products available: " + getItemsCount(getItemsByBrand(items,inputBrand)));
}
  else if (userInput ==="author"){

    var inputAuth = prompt(`Please enter author name to search. \n
      eBay, Target, CDW`).toLowerCase();

console.log("Available items are: " + getItemsByAuthor(items, inputAuth));
console.log("Number of products available: " + getItemsCount(getItemsByAuthor(items,inputAuth)));
  }
    else if (userInput ==="country"){
      var inputCountry = prompt(`Please enter country name to search. \n
        US`).toLowerCase();
      console.log("Available items are: " + getCountry(items, inputCountry));
      console.log("Number of products available: " + getItemsCount(getCountry(items, inputCountry)));

    } else if (userInput ==="total"){

//Total Price

alert(`Inventory current number of items: ${getItemsCount(items)} \n
Inventory current value: USD ${getPrice(items)}.`);

    }



    else {
  alert("Invalid entry. Please refresh to enter again.");
}





























