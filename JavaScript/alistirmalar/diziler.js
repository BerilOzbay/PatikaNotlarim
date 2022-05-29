// Dizilerle calismak
let domain = "domain";
let isActive = false;
let items = [15,25,35,domain,isActive];
console.log(items)


let emptyArray = [] // bos list

// array icerisindeki eleman/oge sayisini ogrenmek
document.querySelector("#info").innerHTML = items.length;

// array icerisindeki ilk elemana ulasmak
console.log(items[0])

// array icerisindeki son elemana ulasmak
console.log(items.length -1 )

// array icerisindeki ortadaki elemana ulasmak
console.log(
    items[Math.floor(items.length/2)]
)

// degisken icindeki bilginin array olup olmadiginin kontrolu
console.log(typeof(items)) // -> object olarak cikti veriyor

console.log(
    Array.isArray(items)
)

//Hangileri is array bilgisidir?

console.log(
    Array.isArray( [] ) // -> true
)

console.log(
    Array.isArray( 1 )// -> false
)

console.log(
    Array.isArray( true )// -> false
)


//Array yapisinda ogeler ile calismak
let items2 = [10,20,30,40, ]
console.log("items - ilk hali :", items2)

//Array sona oge eklemek -> push
items2.push(50)
console.log(items2)

//Array basa oge eklemek -> unshift
items2.unshift(5)
console.log(items2)

//Array en sondaki ogeyi cikarmak -> pop
items2.pop()
console.log(items2)


//Array en bastaki ogeyi cikarmak -> shift
let firstItem = items2.shift()
console.log(firstItem,items2)

//Array icindeki bir ogenin bilgisinin degistirilmesi
items2[0] = 5;
console.log(items2)

//Arrayda son elemanın degistirilmesi
items2[items2.length-1] =10000
console.log(items2)