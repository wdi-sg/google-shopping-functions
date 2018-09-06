//Written by Beng Hui
//Google Shopping Functions

var itemsArray = getItems(products);

//5 Use your functions

//All items made by Sony.
console.log(getItemsByBrand(getItems(products), 'Sony'));

//All items made by Sony that are available.
console.log(getAvailableProducts(getItemsByBrand(getItems(products),'Sony')));

//All available items by the author "Adorama Camera"
console.log(getItemsByAuthor(getItems(products),'Adorama Camera'));

//All items made by Nikon with the author eBay.
console.log(getItemsByBrand(getItemsByAuthor(getItems(products),'eBay'),'Nikon'));






