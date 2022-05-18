// Number  Veri Turu


let stringNumber ="11";
let newNumber = Number(stringNumber);
console.log(newNumber);

// Number bir constractor yapısıdır. String olarak verilen sayısal ifadeyi
// sayısala çevirir ve matematik işlemlerini gerçekleştirmemize yarar.

let price =100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
    "Price:",price,
    "Tax:",tax,
    "PriceTax: ",priceTax, 
    "Total:",total
    )

console.log(2**4); // --> ** ile üs alma islemi yapılır.

console.log(Math.floor(1.7)); // -> Math kütüphanesi kullanılarak floor ile aşağı
// yuvarlama islemi gerçekleştirilir.

console.log(Math.ceil(1.1)); // -> Yukarı yuvarlama islemi gerçekleşir.

console.log(Math.round(1.4)); // -> Yakına yuvarlama islemi yapılır.

