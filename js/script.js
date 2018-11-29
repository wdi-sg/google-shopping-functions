
var items1 = getItems(products);
//part 1 test
// console.log(getItems(products));

// Part 2
  //  var items1 = getItems(products);
  //  var titlesByBrand = getItemsByBrand(items1,"Canon");
  //  console.log(titlesByBrand);

//Part 3
  // var titlesByAuthor = getItemsByAuthor(items1,"Target");
  // console.log(titlesByAuthor);

//Part 4
  // var titlesByAvailability = getAvailableProducts(items1);
  // console.log(titlesByAvailability);

var sonyItems = getItemsByBrand(items1, "Sony");
console.log(sonyItems);

var availableSonyItems = getAvailableProducts(sonyItems);
console.log(availableSonyItems);

var availableAuthorItems= getAvailableProducts(getItemsByAuthor(items1,"Adorama Camera"));
console.log(getItemsByAuthor(items1,"Adorama Camera"));
console.log(availableAuthorItems);

var nikonEbay = getItemsByBrand(getItemsByAuthor(items1,"eBay"),"Nikon");
console.log(nikonEbay);


