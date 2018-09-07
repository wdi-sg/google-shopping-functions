/*
Name:Abdul Hakim
Date:060918
Purpose:Functions
*/

//printing whole product line
//console.log(products) ;


//total number item
var getItems = function(my_array){

  var arr=[]

  for( var i =0 ; i < products.items.length ; i++ ){
    arr.push(my_array.items[i]);
  }

  return arr
}



//Brand
var getItemsByBrand = function(my_array,brands) {

  var arr=[]

  for(var i = 0 ; i < my_array.length ; i++){

    if(my_array[i].product.brand === brands ){
      arr.push(my_array[i])
    }
  }
  return arr
}

//Author
var getItemsByAuthor = function(my_array,author){

  var arr=[]

    for(var i = 0 ; i<my_array.length ; i++){
    if(my_array[i].product.author.name === author){
      arr.push(my_array[i]);
    }
  }
return arr

}

//Availability
var getAvailableProducts=function(my_array){

    var arr=[]

      for(var i = 0 ; i<my_array.length ; i++){
        if(my_array[i].product.inventories[0].availability === "inStock" ){
        arr.push(my_array[i])
        }
    }
    return arr
}

//Country
var getItemsByCountry=function(my_array){

  var arr=[]

  for( var i =0 ; i < products.items.length ; i++ ){
    arr.push(my_array.items[i].product.country);
  }

  return arr
}

//individual price
var getTotalPrice=function(my_array){

  var arr=[]

  for(var i = 0 ; i < products.items.length ; i++){
    arr.push(my_array.items[i].product.inventories[0].price)
  }

  var sum = 0

  for(var i =0 ; i<products.items.length ; i++){
    sum += arr[i]
  }

  return sum
}








