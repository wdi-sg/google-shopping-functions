var compareString;
var returnArray;
var inventories, countries, sum;

function checkArrayLength(array) {
  if (array.length > 0)
    return array;
  else
    return 'Nothing found';
}

function getItems(objectData) {
  return objectData.items;
}

function getItemsByBrand(items, brand) {
  returnArray = [];

  for (i in items) {
    compareString = items[i].product.brand.toLowerCase();

    if (compareString === brand.toLowerCase())
      returnArray.push(items[i]);
  }
  return checkArrayLength(returnArray);
}

function getItemsByAuthor(items, author) {
  returnArray = [];

  for (i in items) {
    compareString = items[i].product.author.name.toLowerCase();

    if (compareString.indexOf(author.toLowerCase()) !== -1)
      returnArray.push(items[i]);
  }
  return checkArrayLength(returnArray);
}

function getAvailableProducts(items) {
  returnArray = [];

  for (i in items) {
    inventories = items[i].product.inventories;

    for (j in inventories) {
      compareString = inventories[j].availability;

      if (compareString === 'inStock')
        returnArray.push(items[i]);
    }
  }
  return checkArrayLength(returnArray);
}

function getItemsCount(objectData) {
  return objectData.items.length;
}

function getItemsCountry(items) {
  returnArray = [];

  for (i in items) {
    countries = items[i].product.country;
    returnArray.push(countries)
  }
  return checkArrayLength(returnArray);
}

function getTotalPrice(items) {
  sum = 0;

  for (i in items) {
    inventories = items[i].product.inventories;

    for (j in inventories) {
      sum += inventories[j].price;
    }
  }
  return sum.toFixed(2);
}
