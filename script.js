console.log(products.items[0].product.brand);

var items = getItems(products.items[0])
  console.log(products.items[0]);

// First we define the function
var getItems = function () {
  console.log(products.items);
};

// Then we can call the function to run all lines of code inside the function.
getItems();

var getItemsByBrand = function () {

  for(var i = 0; i < products.items.length; i++);{

    if (products.items[i].product.brand === getItemsByBrand);{

      console.log(products.items);
  }
};

getItemsByBrand("Sony");
