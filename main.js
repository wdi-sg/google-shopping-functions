var getItems = function (objectData) {
    for (let i = 0; i < objectData.items.length; i++) {
        const items = objectData.items[i];
        console.log(items);
        return items;
        //items is an array of item Objects    
    }
}
getItems(products);
