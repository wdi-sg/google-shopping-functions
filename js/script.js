// 1.) getItems(objectData)
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.

// Note all other functions (below) use the return of this function as their input.


          var getItems = function(objectData){

              return products.items;
          }

          console.log(getItems(products));
          var items = getItems(products);


// 2.) getItemsByBrand(items, brand)
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.

// Test this function by searching for Sony, Canon, Nikon and Panasonic.


          var getItemsByBrand = function(itemsInput, brandInput){
            var brandArray = [];
            for (var i=0; i<itemsInput.length; i++){
              if (itemsInput[i].product.brand === brandInput){
              brandArray.push(itemsInput[i]);
              }
            }
            return brandArray;
          }

          console.log(getItemsByBrand(items, "Sony"));
          console.log(getItemsByBrand(items, "Canon"));
          console.log(getItemsByBrand(items, "Nikon"));
          console.log(getItemsByBrand(items, "Panasonic"));


// 3.) getItemsByAuthor(items, author)
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

// Test this function by searching for Target, CDW, eBay


          var getItemsByAuthor = function(itemsInput, authorInput){
            var authorArray =[];
            for (var i=0; i<itemsInput.length; i++){
              var authorName = itemsInput[i].product.author.name;
              if (authorName.includes(authorInput) === true){
              authorArray.push(itemsInput[i]);
              }
            }
            return authorArray;
          }

          console.log(getItemsByAuthor(getItems(products), "Target"));
          console.log(getItemsByAuthor(getItems(products), "CDW"));
          console.log(getItemsByAuthor(getItems(products), "eBay"));


// 4.) getAvailableProducts(items)
// input: an array of items
// returns: an array of items (that are available)
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the
// available products (an available product is one with at least one availability of "inStock" in the inventories array)


          var getAvailableProducts = function(itemsInput){
            var availableArray=[];
            for (var i=0; i<itemsInput.length; i++){
              if (itemsInput[i].product.inventories[0].availability === "inStock"){
              availableArray.push(itemsInput[i]);
              }
            }
            return availableArray;
          }

          console.log(getAvailableProducts(getItems(products)));


// 5.) Use your functions
// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.

//     All items made by Sony.
          console.log("All items made by Sony:");
          console.log(getItemsByBrand(getItems(products), "Sony"));


//     All items made by Sony that are available.

          var sonyItems = getItemsByBrand(items, 'Sony');
          console.log("All available items made by Sony:");
          console.log(getAvailableProducts(sonyItems));


//      All available items by the author "Adorama Camera"

          var availableItems=getAvailableProducts(items);
          console.log("All available items made by author Adorama Camera:");
          console.log(getItemsByAuthor(items, "Adorama Camera"));


//       All items made by Nikon with the author eBay.

          var nikonItems =getItemsByBrand(items,'Nikon');
          console.log("All items made by Nikon with the author eBay");
          console.log(getItemsByAuthor(items, "eBay"));



// Prompt the user for the search term they are looking for.

          // var userRes = prompt("What search term they are looking for?").toLowerCase();

//If no results were found, let the user know.

          // if (userRes === ("brand" || "items" || "author" || "availability")){
          //   console.log("Please wait while we process your search.");
          // }
          // else{
          //   console.log("No results found.")
          // }


//Prompt the user if they want to do or see the following things,
// then do that thing based on what the user entered:
// The number of product items
// The country of each item
// Total price of all inventory
// Search for one of the things above

          var getCountry = function(itemsInput){
            for (var i=0; i<itemsInput.length; i++){
              console.log("Brand: " + itemsInput[i].product.brand + ". \nCountry: " + itemsInput[i].product.country);
            }
            return
          }

          var getPrice = function(itemsInput){
            var total =0;
            for (var i=0; i<itemsInput.length; i++){
              total = itemsInput[i].product.inventories[0].price + total;
            }
            return total;
          }

          var userChoice = prompt("Do you want to do or see the following: \n [1] the number of product items \n [2] the country of each item \n [3] total price of all inventory \n [4] search for one of the above");
          if (userChoice.includes("1") || userChoice.includes("product")){
            console.log("Product Count: " +items.length);
          }
          else if (userChoice.includes("2") || userChoice.includes("country")){
            getCountry(getItems(products));
          }
          else if (userChoice.includes("3") || userChoice.includes("price")){
            console.log(getPrice(getItems(products)) + " USD");
          }
          else if (userChoice.includes("4") || userChoice.includes("search")){
            console.log("Product Count: " +items.length);
            getCountry(getItems(products));
            console.log("Total price: " +getPrice(getItems(products)) + " USD");
          }






