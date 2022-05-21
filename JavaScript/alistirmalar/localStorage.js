//Sayfada bilgileri tutma islemi - Local storage

//Anahtar value ilişkisi ile tutulur. Set ile yazarken get ile verilerin
//okunmasını sağlarız.

localStorage.setItem('myCat','Keddy');
console.log(localStorage.getItem('myCat'));

//Set item ile aynı veriyi tekrar degistirip, güncelleyebiliriz.

//remove ile değeri kaldırabiliriz.
localStorage.removeItem('myCat');

let user = {userName : "hakanYalcinkaya", isActive:true}
console.log(user)
//Kullanabilmek için json ile birlikte string bir ifadeye çevrilir.
localStorage.setItem('userInfo',JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')
//Stringe çevrilen bilgi json ile geri alınır.
userInfo = JSON.parse(userInfo)
console.log(userInfo)

//Kompleks yapılarsa JSON ile string yapıya dönüstürmemiz gerek.

let items = [1,2,3,user];
console.log(items)
localStorage.setItem('newItem',JSON.stringify(items))