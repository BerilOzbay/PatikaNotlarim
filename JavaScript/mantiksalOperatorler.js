//Mantıksal Operatörler

let price =  "100";
let user = "beril";
// Eşit mi? ==
console.log(price == 1) // ->false
console.log(price ==100) // sadece içindeki değerin eşitliğini kontrol ediyor. -> true

//Hem değeri hem türü eşit mi? ===
console.log(price===100) // -> false

// Eşit değilse !=
console.log(price!=1) // ->true
console.log( user != "guest") // -> true

// Küçükse, küçük eşitse, büyükse,büyük eşitse
console.log(price <100) // ->false
console.log(price<=100) // ->true
console.log(price>100) // ->false
console.log(price>=100) // ->true

// && -> ve
//true dönmesi için verilen iki koşulunda true olması gerek.
console.log( price && user != "guest") // -> true

// || -> veya 
//true dönmesi için verilen bir koşulun doğru olması yeterlidir.

console.log(price<1 || user !="guest") // -> true

// ! -> tersi
console.log(price>0 && !(user == "guest") ) // -> true