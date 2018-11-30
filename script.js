//completeProductArray contains all the items in products.js
var completeProductArray = getArray(products)

//Print all the Sony products
console.log(getItemsByBrand(completeProductArray, "Sony"))

console.log('---')

//Print all the available Sony products
console.log(getAvailableProducts(getItemsByBrand(completeProductArray, "Sony")))

console.log('---')

//Print all available items by the author "Adorama Camera"
console.log(getAvailableProducts(getItemsByAuthor(completeProductArray, "Adorama Camera")))

console.log('---')

//Print all the Nikon items sold by eBay
console.log(getItemsByAuthor(getItemsByBrand(completeProductArray, "Nikon"), "eBay"))

console.log('---')

// -------------------------------------- FURTHER BELOW ------------------------------------------

//Initiate the prompts to decide what the user wants to do
var initialCriterion = initiatePrompts();

//Asks for search criterion from user and also stores it for use later
var searchCriterion = getSearchCriterion();

//Asks for search keyword from user and also stores it for use later
var keyword = getKeyword();

//Asks for whether user wants to search for products based on other criteria
var extraCriterion = getExtraCriterion();

//Get the search result in array form
var resultArray = getResultArray(searchCriterion, keyword, completeProductArray)
var resultString = getResultString(resultArray)
alert(resultString)


// -------------------------------------- BEWARE! HERE BE FUNCTIONS  ------------------------------------------

//Prompt the user for his/her search criterion
function getSearchCriterion(){
  while(true){
    var searchCriterion = prompt("How would you like to search for the product(s)?\n1 - By item name or type\n2 - By brand name\n3 - By seller name")
    searchCriterion = parseInt(searchCriterion)
    if (searchCriterion === 1 || searchCriterion === 2 || searchCriterion === 3){
      return searchCriterion
    } else {
      alert("Invalid search criterion! Please try again.")
    }
  }
}

function initiatePrompts(){
  while (true){
    var extraCriterion = prompt("Hi! Please select what you would like to do:\n1 - Search for a product\n2 - Display the total number of products\n3 - Display the products by country\n4 - Display the total price of all inventory")
    extraCriterion = parseInt(extraCriterion)
    if (extraCriterion === 1 || extraCriterion === 2 || extraCriterion === 3 || extraCriterion === 4){
      return extraCriterion
    } else {
      alert("Invalid choice! Please try again.")
    }
  }
}

//Prompt the user for his/her search keyword
function getKeyword(){
  while(true){
    var keyword = prompt("Please enter your keyword.")
    if (keyword !== ""){
      return keyword
    } else {
      alert("You must enter a keyword!")
    }
  }
}

//Return an array based on the user's search criterion and keyword
function getResultArray(searchCriterion, keyword, items){
  switch(searchCriterion){
    case 1:
      //Return an array with items that have a name matching the keyword
      return getAvailableProducts(getItemsByName(items, keyword))
    case 2:
      //Return an array with items that have a brand matching the keyword
      return getAvailableProducts(getItemsByBrand(items, keyword))
    case 3:
      //Return an array with items that have a seller matching the keyword
      return getAvailableProducts(getItemsByAuthor(items, keyword))
    default:
      alert("There was an error!")
      return
  }
}

function getResultString(resultArray){
  //Construct string for result
  var resultString = ""
  //Index is just a constant to be used in the result alert box
  var index = 1

  if (resultArray.length === 0){
    resultString = "No results found, sorry!"
  } else {
    resultString += "We found the following results for you: \n\n"
    for (var result in resultArray){
      resultString += index + ". " + resultArray[result].product.title + "\n"
      index++
    }
  }
  return resultString
}



