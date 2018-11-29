// ## Deliverables

// Create the following functions.

// ## 1.) getItems(objectData)

var getItems = function(objectData) {
  var items = objectData;
  return items
};

var items = getItems(products.items);
// * **input:** json object
// * **returns:** an array of items

// Create a function called `getItems` that simply returns the items array from the google product object.

// **Note** all other functions (below) use the return of this function as their input.

// ## 2.) getItemsByBrand(items, brand)

var getItemsByBrand = function(items, userBrand) {
  var newArr = [];
  for (var i=0; i<items.length; i++) {
    var brands = items[i].product.brand;
    if (brands == userBrand) {
      newArr.push(items[i]);
    };
  };
  return newArr;
};


// * **input:** an array of items, a string of a brand to filter with
// * **returns:** an array of items (of a specific brand)

// Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.

// Test this function by searching for Sony, Canon, Nikon and Panasonic.


// ## 3.) getItemsByAuthor(items, author)

var getItemsByAuthor = function(items, userAuthor) {
  var newArr = [];
  for (var i=0; i<items.length; i++) {
    var authors = items[i].product.author.name;
    if (authors == userAuthor) {
      newArr.push(items[i]);
    };
  };
  return newArr;
};

// * **input:** an array of items, a string of an author to filter with
// * **returns:** an array of items (of a specific author)

// Create a function called `getItemsByAuthor` that takes an item array and returns a new array of all items by a specified author.

// Test this function by searching for Target, CDW, eBay

// ## 4.) getAvailableProducts(items)

var getAvailableProducts = function(items) {
  var newArr = [];
  for (var i=0; i<items.length; i++) {
    var avail = items[i].product.inventories[0].availability;
    if (avail == 'inStock') {
      newArr.push(items[i]);
    };
  };
  return newArr;
};

// * **input:** an array of items
// * **returns:** an array of items (that are available)

// Create function called `getAvailableProducts` that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)


// ## 5.) Use your functions

// Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.

// * All items made by Sony.
getItemsByBrand(items, 'Sony');

// * All items made by Sony that are available.
var sonyItems = getItemsByBrand(items, 'Sony');
getAvailableProducts(sonyItems);

// * All available items by the author "Adorama Camera"
getItemsByAuthor(items, 'Adorama Camera');

// * All items made by Nikon with the author eBay.
getItemsByBrand(items, 'Nikon');
var nikonItems = getItemsByBrand(items, 'Nikon');
getItemsByAuthor(nikonItems, 'eBay');

// * remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.



// ** Example Function Usage**

// ```js

// //verbose -- outputs all cannon products
// var items = getItems(data);
// var cannonItems = getItemsByBrand(items, 'Cannon');
// console.log(cannonItems);

// //single line version -- does the same as above
// console.log(getItemsByBrand(getItems(data), 'Cannon'));
// ```

// ## Further
// Prompt the user for the search term they are looking for.
var searchResultArr = [];

var userHowManyItem;
var userCountryItem;
var userEveryItem;
var userPriceRange;
var userManyCountryEvery;
var userMainTerm;

var getItemsByRange;

var sorryMessage = function() {
  alert('Sorry, we do not have any products that matches your search right now. :(')
  searchAgain();
};

var searchAgain = function() {
  var againUserInput = prompt('Would you like to try another search? (yes or no)');
  //checks if  user click cancel or press escape, show thank you message for user to exit prompts
  if (againUserInput == null || againUserInput == "") {
    thankYouMessage();
  };

againUserInput = againUserInput.toLowerCase();

if (againUserInput.charAt(0) == 'y') {
  searchResultArr = [];
  searchRun();
} else if (againUserInput.charAt(0) == 'n') {
  thankYouMessage();
};
};

var thankYouMessage = function() {
  alert("Thank you!\nTo search again, please refresh the page.\nGood bye!")
  return;
};

var foundMessage = function() {
  alert('This are your search results:\n\n' + searchResultArr);
  searchAgain();
};

var checkUserMainTermPrompt = function(whatUserTyped) {
  while (whatUserTyped == null || whatUserTyped.length < 5 || whatUserTyped == "") {
    whatUserTyped = prompt("Please type at least 5 alphanumeric letters.")
  };
    whatUserTyped = whatUserTyped.toLowerCase();
    return whatUserTyped;
};

var checkPriceRangePrompt = function(whatUserTyped) {
  while (whatUserTyped == null || whatUserTyped == "" || whatUserTyped.includes(',') == false || whatUserTyped.includes(" ") == true) {
    whatUserTyped = prompt("Please state with this format:\n\"min\", \"max\"", "1,1000")
  };
  return whatUserTyped;
};

  var threeWayLoop = function(whatUserTyped) {
  if (whatUserTyped.charAt(0) == 's') {
    return whatUserTyped;
  } else if (whatUserTyped.charAt(0) == 'c') {
    return whatUserTyped;
  } else if (whatUserTyped.charAt(0) == 'e') {
    return whatUserTyped;
  } else {
    whatUserTyped = 0;
    return whatUserTyped;
  }
  checkManyCountryEvery(whatUserTyped);
};

var checkManyCountryEvery = function(whatUserTyped) {
  while (whatUserTyped == null || whatUserTyped == 0 || whatUserTyped == "") {
    whatUserTyped = prompt("Please state only \"specific\", \"country\", or \"everything\" only.", "specific or country or everything");
  };
      whatUserTyped = whatUserTyped.toLowerCase();
    threeWayLoop(whatUserTyped);
  return whatUserTyped;
};

var checkHowManyPrompt = function(whatUserTyped) {
    if (whatUserTyped == null || whatUserTyped == "") {
      thankYouMessage();
  };

    while (whatUserTyped < 1 || whatUserTyped > 25) {
     whatUserTyped = prompt("Please state between 1 to 25 only", "1 ~ 25");
    };
    return parseInt(whatUserTyped);
};




var manySearchResult = function(mainTerm, priceRange, howMany) {
  var SearchResultArrCount;
  priceRange = priceRange.split(',').map(Number);

    for (var i=0; i<items.length; i++) {
      var brand = items[i]['product']['brand'];
      var productTitle = items[i]["product"]["title"];
      var productCheck = productTitle.toLowerCase();
      var price = items[i]["product"]["inventories"][0]['price'];
      var country =items[i]["product"]["country"];
      if (productCheck.includes(mainTerm) && price >= parseInt(priceRange[0]) && price <= parseInt(priceRange[1])) {
        var tempCollate = '\nProduct name: ' + productTitle + '\nBrand: ' + brand + '\nCountry: ' + country + '\nPrice: $' + price + '\n';
        searchResultArr.push(tempCollate);
        SearchResultArrCount++;
      };
    };
      if (SearchResultArrCount == 0) {
        sorryMessage();
      } else if (SearchResultArrCount < 0) {
        console.log('reached line 243');
        searchResultArr = searchResultArr.slice(0, howMany);
      };
      foundMessage();
};

var countrySearchResult = function(mainTerm, priceRange, userCountry) {
  var SearchResultArrCount;
  priceRange = priceRange.split(',').map(Number);
  userCountry = userCountry.toLowerCase();

    for (var i=0; i<items.length; i++) {
      var brand = items[i]['product']['brand'];
      var productTitle = items[i]["product"]["title"];
      var productCheck = productTitle.toLowerCase();
      var price = items[i]["product"]["inventories"][0]['price'];
      var country =items[i]["product"]["country"];
      if (productCheck.includes(mainTerm) && price >= parseInt(priceRange[0]) && price <= parseInt(priceRange[1]) && country.toLowerCase() == userCountry) {
        var tempCollate = '\nProduct name: ' + productTitle + '\nBrand: ' + brand + '\nCountry: ' + country + '\nPrice: $' + price + '\n';
        searchResultArr.push(tempCollate);
        SearchResultArrCount++;
      };
    };
      if (SearchResultArrCount == 0) {
        sorryMessage();
      }
      foundMessage();
};



var everySearchResult = function(mainTerm, priceRange, userCountry) {
  var SearchResultArrCount;
  priceRange = priceRange.split(',').map(Number);

    for (var i=0; i<items.length; i++) {
      var brand = items[i]['product']['brand'];
      var productTitle = items[i]["product"]["title"];
      var productCheck = productTitle.toLowerCase();
      var price = items[i]["product"]["inventories"][0]['price'];
      var country =items[i]["product"]["country"];
      if (productCheck.includes(mainTerm) && price >= parseInt(priceRange[0]) && price <= parseInt(priceRange[1])) {
        var tempCollate = '\nProduct name: ' + productTitle + '\nBrand: ' + brand + '\nCountry: ' + country + '\nPrice: $' + price + '\n';
        searchResultArr.push(tempCollate);
        SearchResultArrCount++;
      };
    };
      if (SearchResultArrCount == 0) {
        sorryMessage();
      }
      foundMessage();
};




var searchRun = function() {

  var userMainTermPrompt = prompt("What products are you looking for? (Minimum 5 alphanumeric letters)");
  userMainTerm = checkUserMainTermPrompt(userMainTermPrompt);

  var userPriceRangePrompt = prompt("What price range of products are you looking at? (min,max)", "1,9000");
  userPriceRange = checkPriceRangePrompt(userPriceRangePrompt);

  var userManyCountryEveryPrompt = prompt("Would you like to see just specific number of products, or country of make, or everything?", "specific or country or everything");
  userManyCountryEvery = checkManyCountryEvery(userManyCountryEveryPrompt);

  if (userManyCountryEvery.charAt(0) == 's') {
    var userHowManyItemPrompt = prompt("What is the max product range you would like to see?", "1 ~ 25");
    userHowManyItem = parseInt(checkHowManyPrompt(userHowManyItemPrompt));
    manySearchResult(userMainTerm, userPriceRange, userHowManyItem);
  } else if (userManyCountryEvery.charAt(0) == 'c') {
    var userCountryPrompt = prompt("What country of make product would you like to see?", "US");
    userCountryItem = userCountryPrompt;
    countrySearchResult(userMainTerm, userPriceRange, userCountryItem);
  } else if (userManyCountryEvery.charAt(0) == 'e') {
    everySearchResult(userMainTerm, userPriceRange, userCountryItem);
  };
  };

alert('Welcome to imPROMPTu shop v2.0!')
searchRun();

// ## Further
// If no results were found, let the user know.

// ## Further

// Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:

// 1) The number of product items

// 2) The country of each item

// 3) Total price of all inventory

// 4) Search for one of the things above


// ## Further

// Let the user enter in a maximum or minimum price. Only show them items that correspond.

// ## Further

// Let the user enter in a maximum *and* minimum price. Only show them items that correspond.


// ---

// ## Licensing
// 1. All content is licensed under a CC-BY-NC-SA 4.0 license.
// 2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
