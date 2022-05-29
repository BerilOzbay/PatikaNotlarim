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