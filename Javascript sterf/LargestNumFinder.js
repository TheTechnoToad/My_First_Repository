var numArray = [-20,-19,-14,-15,-25,-11,-12,-14,-18,-98];

lNumber = numArray[0];

for(var i=0; i < numArray.length;i++){
  if(lNumber < numArray[i]){
    lNumber = numArray[i];
  }
}

console.log(lNumber);

var i = 0;
while(i < numArray.length){
  if(lNumber < numArray[i]){
    lNumber = numArray[i];
  }
  i++;
}

console.log(lNumber);