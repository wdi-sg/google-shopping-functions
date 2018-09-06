//Written by Beng Hui

//1) getItems(objectData)

function getItems(objectData){
    return objectData.items;
}

//2) getItemsByBrand(items,brand)

function getItemsByBrand(itemsArray,brand){
      var itemsByBrand = [];
    for (var i=0; i < itemsArray.length; i++){
        if (itemsArray[i].product.brand.toLowerCase() === brand.toLowerCase()){
            itemsByBrand.push(itemsArray[i]);
    }
  }
  return itemsByBrand;
}

//3) getItemsByAuthor(items, author)

function getItemsByAuthor(itemsArray,author){
      var itemsByAuthor = [];
    for (var i=0; i < itemsArray.length; i++){
        if (itemsArray[i].product.author.name.toLowerCase() === author.toLowerCase()){
            itemsByAuthor.push(itemsArray[i]);
    }
  }
  return itemsByAuthor;
}

//4) getAvailableProducts(items)

function getAvailableProducts(itemsArray){
      var availableProducts = [];
for (var i=0; i < itemsArray.length; i++){
        if (itemsArray[i].product.inventories[0].availability === "inStock"){
            availableProducts.push(itemsArray[i]);
    }
  }
  return availableProducts;
}
