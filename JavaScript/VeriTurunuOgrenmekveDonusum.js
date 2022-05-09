let price =111;
let stringPrice="111";
let hasPassword = true;

//type fonksiyonu ile veri turu öğrenilir.

console.log(
    "price:",
    typeof(price)
)

console.log(
    "stringPrice:",
    typeof(stringPrice)
)

console.log(
    "hasPassword:",
    typeof(hasPassword)
)
// string(metinsel) bilgileri int ve float'a donusturmek

//parseInt veya parseFloat fonksiyonu string ifadelerde rakamsal kısımları bulup sayıya 
//cevirmeye çalışıyor. Fakat Number() string ifadenin içinde sadece sayı varsa
//sayı veri turune ceviriyor.Baska bir karakterin olmaması gerekiyor.

let number1 = "11";
console.log(
"number1: ",parseInt(number1)
)

//number veri turunu stringe donusturmek

//toString() fonksiyonu number veri turunu string ifadeye donusturmeye yarar.
let number5 =55
number5 =number5.toString()
console.log(number5,typeof(number5))