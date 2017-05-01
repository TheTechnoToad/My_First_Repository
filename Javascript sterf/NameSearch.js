/*jshint multistr:true */
var text = "merp Sqielyr merp odiifoneiqnioenion i Sqiielyr iospjdaijsdfj Sqielyr";
var myName = "Sqielyr";
var hits = [];

for(var i = 0; i < text.length; i++){
    if(text[i] === 'S' && text[i +myName.length - 1] === 'r'){
        for(var j = i; j < myName.length + i; j++){
            hits.push(text[j]);
        }
    }
}

if(hits[0]===""){
    console.log("Your name was not found");
}
else {
    console.log(hits);
}