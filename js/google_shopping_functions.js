/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */

function getItems(objectData) {
  return objectData.items;
}

function getItemsByBrand(items, brand, productStatus) {

  var itemList = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand.toLowerCase().includes(brand.toLowerCase())) {
      if (productStatus === "All") {
        itemList.push(items[i])
      } else if (productStatus === "inStock") {

        if (items[i].product.inventories[0].availability === "inStock") {
          itemList.push(items[i])
        }
      } else {

        if (items[i].product.inventories[0].availability === "backorder") {
          itemList.push(items[i])
        }
      }

    }
  };

  return itemList;

}

function getItemsByAuthor(items, author, productStatus) {

  var itemList = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name.toLowerCase().includes(author.toLowerCase())) {
      if (productStatus === "All") {
        itemList.push(items[i])
      } else if (productStatus === "inStock") {
        if (items[i].product.inventories[0].availability === "inStock") {
          itemList.push(items[i])
        }
      } else {
        if (items[i].product.inventories[0].availability === "backorder") {
          itemList.push(items[i])
        }
      }
    }
  };

  return itemList;

}

function getAvailableProducts(items, schData, schTerm, productStatus) {

  var itemList = [];

  for (var i = 0; i < items.length; i++) {
    var item = [];
    if (schTerm = "allProducts") {
       item = items[i];

    } else if (schTerm = "byBrand") {
       if (items[i].product.brand.toLowerCase().includes(brand.toLowerCase())) {
         item = items[i];
       }
    } else {
      if (items[i].product.author.name.toLowerCase().includes(schData.toLowerCase())) {
        item = items[i];
      }
    }

    // if (item.length > 0) {
      if (productStatus === "All") {
        itemList.push(item)
      } else if (productStatus === "inStock") {
        if (item.product.inventories[0].availability === "inStock") {
          itemList.push(item)
        }
      } else {
        if (item.product.inventories[0].availability === "backorder") {
          itemList.push(item)
        }
      }
    // }

  };

  return itemList;

}
// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));
