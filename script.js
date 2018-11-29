
var productA = products.items;  //All items in products


var getItems = function(products)
{
  var itemArr = [];
  itemArr.push(products.items);
  return itemArr;
  //console.log(itemArr);
}


var getItemsByBrand = function(items,brand)
{
  var foundBrands = [];

  for(var i = 0; i < items.length; i++)
  {
    var name = items[i].product.title;
    var brands = products.items[i].product.brand;

    if(brands.toLowerCase() === brand.toLowerCase())  // if userBrand(brand) equals to array iteration(brands)
    {
      //console.log("One brand is found!! " + brands);

      foundBrands.push(name);
      console.log(foundBrands);
    }
  }
  return foundBrands;
}

var getItemsByAuthor = function(items, author)
{
  var foundAuthor = [];
  for(var i = 0; i < items.length; i++)
  {
    var name = items[i].product.title;
    var authors = products.items[i].product.author.name;

    if(authors.toLowerCase() === author.toLowerCase())
    {
      //console.log("Author is found!! " + authors);

      foundAuthor.push(name);
    }
  }
  return foundAuthor;
}

/*
var getAvailableProducts = function(items)
{
  var availProdArray = [];
  //var unavailProdArray = [];

   for(var i = 0; i < items.length; i++)
  {
    var name = products.items[i].product.title;
    var avail = products.items[i].product.inventories[0].availability;//iterate the array for inventories availability

    if(avail.toLowerCase() === "instock")
    {

      availProdArray.push(name);
    }
    /*else
    {
      console.log("Item not found!");
      unavailProdArray.push(name);
    }

  }
  return availProdArray;
}
*/

/*
var itemsArray = []
itemsArray = getItems(products);

var userBrand = prompt("Enter a brand: ");
var searchResult1 = getItemsByBrand(productA,userBrand);
console.log("There are " + searchResult1.length +" items made by: "+ userBrand + "\n" + searchResult1);


var userProductInput = prompt("Enter a Item brand that is available ");
var searchResult2 = getAvailableProducts(productA);
console.log("There are " + searchResult2.length +" items made by: " + userProductInput + " and are available inStock" +  "\n" + searchResult2);


var userInputAuthor = prompt("Enter a author name");
var searchResult3 = getItemsByAuthor(productA, userInputAuthor);
console.log("There are " + searchResult3.length+ "items made by: " + userInputAuthor + "\n" + searchResult3);
*/

//////////////////////////////////////////////////////////////////
//part 5:
var userInputBrand = prompt("Enter a brand: ");
var brand1 = getItemsByBrand(productA,userInputBrand);

var userInputAuthor2 = prompt("Enter a author name");
var author1 = getItemsByAuthor(productA, userInputAuthor2);

var allItemsArray = getItems(productA);

for(var i = 0; i < allItemsArray.length; i++ )
{
  var searchArray = [];
  var name = products.items[i].product.title;

  if((brand1.toLowerCase() === products.items[i].product.brand) && (author1.toLowerCase() === products.items[i].product.author.name))
  {
    searchArray.push(name);
  }
  console.log(searchArray);
}


/*
5.) Use your functions

Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.

* All items made by Sony.  //getItemsByBrand xx
* All items made by Sony that are available.    //getAvailableProducts xx

* All available items by the author "Adorama Camera"    ////getAvailableProducts
* All items made by Nikon with the author eBay.     // getItemsByBrand  &  getItemsByAuthor

* remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.
*/

