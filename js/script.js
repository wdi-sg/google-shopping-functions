// 5.) Use your functions

var allItems = getItems(products);  // stores all items

// // All items made by Sony.
// var sonyItems = getItemsByBrand(allItems, "nikon");
// console.log(sonyItems);

// // All available items by the author "Adorama Camera"
// var adoramaItems = getItemsByAuthor(getAvailableProducts(allItems), "Adorama Camera");
// console.log(adoramaItems);

// // All items made by Nikon with the author eBay.
// var allMatches = getItemsByAuthor(getItemsByBrand(allItems, "nikon"), "eBay");
// console.log(allMatches);


//-------------------------------------------------------------------------------------
// Further


// Prompt the user for the search term they are looking for.

var searchTerm = prompt("Please enter the search term you're looking for: \n - Author \n - Brand ");
searchTerm = searchTerm.toLowerCase(); // to make it case insensitive

while (searchTerm !=="author" && searchTerm !== "brand"){
    searchTerm = prompt("No results found. Please try again with the following search term: \n - Author \n - Brand ");
    searchTerm = searchTerm.toLowerCase(); // to make it case insensitive
}

var searchItem = prompt("Please enter the product or product detail: \n\n e.g. Canon, eBay");
searchItem = searchItem.toLowerCase(); // to make it case insensitive

var searchResult; // to get array of search results according to search term and item
if (searchTerm === "author"){
    searchResult = getItemsByAuthor(getAvailableProducts(allItems), searchItem);
    // console.log(searchResult);
} else {
    searchResult = getItemsByBrand(getAvailableProducts(allItems), searchItem);
    // console.log(searchResult);
}

// If no results were found, let the user know.
if (searchResult.length === 0){
    alert("Sorry, no results were found.");
} else {
    // Prompt the user if they want to do or see the following things, then do that thing based on what the user entered:

    // check if user's input is correct
    var message = "Pick one of the following for more details: \n1. The number of product items \n2. The country of each item \n3. Total price of all inventory \n4. List items using maximum and/or minimum price \n\n(enter the digit of choice i.e. 1/2/3/4)";
    var searchOptions = prompt(message);
    searchOptions = parseInt(searchOptions); // to make an integer

    var conditionsStated = [1,2,3,4]
    var checkResult = toCheckIfTrue(conditionsStated, searchOptions);
    while (!checkResult){
        searchOptions = prompt("Please try again. " + message);
        searchOptions = parseInt(searchOptions); // to make an integer
        checkResult = toCheckIfTrue(conditionsStated, searchOptions);
    }

    var consolidateResult = "" // to consolidate results from

    // 1. The number of product items
    if (searchOptions === 1) {
        alert("Number of product items available: " + searchResult.length)

    // 2. The country of each item
    } else if (searchOptions === 2) {

        for (var i=0; i<searchResult.length; i++){
            consolidateResult =  consolidateResult + ("- " + searchResult[i].product.author.name + ": " + searchResult[i].product.country + "\n");
        }
        alert(consolidateResult);

    // 3. Total price of all inventory
    } else if (searchOptions === 3){
        var totalPrice = 0;
        for (var j=0; j<searchResult.length; j++){
            var priceInventory = searchResult[j].product.inventories;
                console.log(priceInventory);
            for (var k=0; k<priceInventory.length; k++){
                totalPrice += priceInventory[k].price;
            }
        }
        alert("Total price of all inventories : $" + totalPrice.toFixed(2));

    // 4. List items using maximum or minimum price vs maximum and minimum price
    } else {
        // check if user's input is correct
        message = "Pick whether to list \n1. maximum OR minimum price \n2. maximum AND minimum price \n\n(enter the digit of choice i.e. 1/2)";
        userAndOr = prompt(message);
        userAndOr = parseInt(userAndOr);

        conditionsStated = [1,2]
        checkResult = toCheckIfTrue(conditionsStated, userAndOr);
        while (!checkResult){
            userAndOr = prompt("Please try again. " + message);
            userAndOr = parseInt(searchOptions); // to make an integer
            checkResult = toCheckIfTrue(conditionsStated, searchOptions);
        }

        var min =0;
        var max =0;
        var consolidateItems = "";

         // 4a. List items using maximum or minimum price
        if (userAndOr === 1){
            message = "State whether you want to limit using minimum or maximum price (min/max): ";
            minOrMax = prompt(message);
            minOrMax = minOrMax.toLowerCase() // to make an integer

            conditionsStated = ["min","max"]
            checkResult = toCheckIfTrue(conditionsStated, minOrMax);
            while (!checkResult){
                minOrMax = prompt("Please try again. " + message);
                minOrMax = minOrMax.toLowerCase()
                checkResult = toCheckIfTrue(conditionsStated, minOrMax);
            }

            if (minOrMax === "min"){
                min = prompt("Please state minimum value (in digits, without any signs): ");
                min = parseInt(min);
                for (var k=0; k<searchResult.length; k++){
                    if (parseInt(searchResult[k].product.inventories[0].price) > min){
                        consolidateItems += "- " + searchResult[k].product.title + " \n";
                    }
                }
            } else {
                max = prompt("Please state maximum value (in digits, without any signs): ");
                max = parseInt(max);
                for (var k=0; k<searchResult.length; k++){
                    if (parseInt(searchResult[k].product.inventories[0].price) < max){
                        consolidateItems += "- " + searchResult[k].product.title + " \n";
                    }
                }
            }

         // 4b. List items using maximum and minimum price
        } else {
            var minAndMax;

            min = prompt("Please state minimum value (in digits, without any signs): ");
            min = parseInt(min);
            max = prompt("Please state maximum value (in digits, without any signs): ");
            max = parseInt(max);

            while (Number.isInteger(min) === false && Number.isInteger(max) === false){
                min = prompt("Please try again. State minimum value (in digits, without any signs): ");
                min = parseInt(min);
                max = prompt("Please try again. State maximum value (in digits, without any signs): ");
                max = parseInt(max);
            }

            for (var t=0; t<searchResult.length; t++){
                if (parseInt(searchResult[t].product.inventories[0].price) > min && parseInt(searchResult[t].product.inventories[0].price) < max){
                    consolidateItems += "- " + searchResult[t].product.title + " \n";
                }
            }
        }
        alert("The following items are within your price range: \n" + consolidateItems);
    }
}


