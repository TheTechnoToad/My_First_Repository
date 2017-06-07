var cartItems = [];
var uContinue = true;

function addItems (){
  while(uContinue){
      
      var uItem = prompt("Please enter an item name and price (seperated by a comma ie                                Suitcase, 20) , or -1 to exit");
        var splitInput = uItem.split(", ");
        var item = {};
        if(uItem === "-1"){
          uContinue = false;
        }
        //else if(uItem)
        else{
          var splitInput = uItem.split(", ");
          var item = {};
          item.name = splitInput[0];
          item.price = parseInt(splitInput[1]);
          cartItems.push(item);
        }
  }
}

function removeItem(){
  var uRemove = prompt("Would you like to remove an item? Please enter Y or N");
  if(uRemove === "Y" || uRemove === "y" || uRemove === "Yes" || uRemove === "yes"){
    var itemRemove = prompt("Please enter the name of the item you would like to remove.");
    for(var i = 0; i <= cartItems.length -1; i++){
      if(itemRemove === cartItems[i].name){
        cartItems.splice(i,1);
     }
    }
   }
  else
    return;
}

function printCart(){
  console.log("********************Here are your items********************")
  for(var i = 0; i <= cartItems.length -1; i++){
    console.log(cartItems[i].name + ": " +cartItems[i].price)
  }
}

function creditCheck(){
  var cartPrice = 0;
  for(var i = 0; i <= cartItems.length -1; i++){
    cartPrice += cartItems[i].price;
  }
  console.log("cart price " + cartPrice);
}

function calculateTax (){
  for(var i = 0; i <= cartItems.length-1; i++){
    cartItems[i].price = cartItems[i].price + (cartItems[i].price*.075);
    console.log(cartItems[i].price);
  }
}

var uAddItem = prompt("Would you like to add an item? Please enter Y or N");
 if(uAddItem === "Y" || uAddItem === "y" || uAddItem === "Yes" || uAddItem === "yes"){
    addItems();
    removeItem();
    calculateTax();
    creditCheck();
    printCart();
 }
