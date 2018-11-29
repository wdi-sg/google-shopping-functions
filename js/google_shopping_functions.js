//-------------------------------------------------------------------------------------
// 1.) getItems(objectData)

var getItems = function(obj) {
    var allItems = [];
    for (var j=0; j < obj.items.length; j++){
        allItems.push(obj.items[j]);
    }
    // console.log(allItems)
    return allItems;
}

//-------------------------------------------------------------------------------------
// 2.) getItemsByBrand(items, brand)

var getItemsByBrand = function(items, brand){
    var brandArr =[];
    brand = brand.toLowerCase();
    for (var k=0; k<allItems.length; k++){
        var currentBrand = (allItems[k].product.brand).toLowerCase();
        if (currentBrand === brand){
            brandArr.push(allItems[k]);
        }
    }
    // console.log(brandArr);
    return brandArr;
}

//-------------------------------------------------------------------------------------
// 3.) getItemsByAuthor(items, author)

var getItemsByAuthor = function(items, author){
    var allAuthorsArr = [];
    for (var m=0; m<items.length; m++){ // makes all authors lowercase i.e case insensitive
        var lowerCaseAuthors = (items[m].product.author.name).toLowerCase()
        allAuthorsArr.push(lowerCaseAuthors);
    }
    console.log()


    var authorArr = []; //authors that will be selected
    author = author.toLowerCase(); // makes it case insensitive

    for (var b=0; b<items.length; b++){
        var authorAvail = allAuthorsArr[b].includes(author);
        if (authorAvail){
            authorArr.push(items[b]);
        }
    }
    // console.log(authorArr);
    return authorArr;
}

//-------------------------------------------------------------------------------------
// 4.) getAvailableProducts(items)

var getAvailableProducts = function(items){
    var availableProducts = [];

    for (var c=0; c < items.length; c++){
        var inventory = items[c].product.inventories;

        for (var d=0; d<inventory.length; d++){
            if (inventory[0].availability === "inStock"){
                availableProducts.push(items[c]);
            }
        }
    }
    // console.log(availableProducts);
    return availableProducts;
}


//-------------------------------------------------------------------------------------

var toCheckIfTrue = function(conditions, criterion){
    var truthyFalse;
    for (var d=0; d<conditions.length; d++){
        if (criterion === conditions[d]) {
            truthyFalse = true;
            // console.log("ITS TRUUUU");
            return truthyFalse;
        }
    }
    truthyFalse = false;
    // console.log("ITS FALSEEE");
    return truthyFalse;
}