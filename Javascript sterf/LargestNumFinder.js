var numArray = [-20,-19,-14,-15,-25];

lNumber = numArray[0];

for(var i=0; i < numArray.length;i++){
  if(lNumber < numArray[i]){
    lNumber = numArray[i];
  }
}

console.log(lNumber);