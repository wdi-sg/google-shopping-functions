var getItems = function (objectData) {
    return objectData.items;
    //items is an array of item Objects
}
function getItemsByBrand(items, brandName) {
    //array which will hold our brand search results
    var brandArray = [];
    for (let i = 0; i < items.length; i++) {
        //brand reseult found in lowercase
        var brandResult = items[i].product.brand.toLowerCase();
        if (brandResult === brandName.toLowerCase()) {
            brandArray.push(items[i]);
        }
    }
    return brandArray;
}
getItems(products);
