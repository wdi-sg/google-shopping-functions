/*
Name:Abdul Hakim
Date:060918
Purpose:Functions
*/

//printing whole product line
//console.log(products) ;


//////Problem 1
var getItems = function(my_array){

  var arr=[]

  for( var i =0 ; i < products.items.length ; i++ ){
    arr.push(my_array.items[i]);
  }

  return arr
}



///////Problem 2
var getItemsByBrand = function(my_array,brands) {

  var arr=[]

  for(var i = 0 ; i < my_array.length ; i++){

    if(my_array[i].product.brand === brands ){
      arr.push(my_array[i])
    }
  }
  return arr
}

//////Problem 3
var getItemsByAuthor = function(my_array,author){

  var arr=[]

    for(var i = 0 ; i<my_array.length ; i++){
    if(my_array[i].product.author.name === author){
      arr.push(my_array[i]);
    }
  }
return arr

}

//////Problem 4
var getAvailableProducts=function(my_array){

    var arr=[]

      for(var i = 0 ; i<my_array.length ; i++){
        if(my_array[i].product.inventories[0].availability === "inStock" ){
        arr.push(my_array[i])
        }
    }
    return arr
}
