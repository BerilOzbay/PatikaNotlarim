//let ve const ile degisken tanımlama

// var servarName ="api.kodluyoruz.org" -> var değişkeni güncel hayatta kullanılmıyor.

let serverName="https://kodluyoruz.org";
console.log(serverName);
let password= "1234";
console.log(password);

/* console.log(fullName) -> tanımlamadan önce basılmaya çalıştı fakat
hata verdi. Var ile değişken tanımlanmış olsaydı hatayı göremeden sadece
undefined uyarısı alacaktık.
let fullname = ("Beril Özbay") */

let fullname = ("Beril Özbay");
fullname += " Ekleme islemi";
console.log(fullname);

//String ifadelere ekleme işlemi += ile sağlanıyor.

const serverPasswor = "123456789"
/* const degisken tanımlama yonteminde degisken icerisi bos bırakılarak
tanımlanamıyor. */

//const ile tanımlanan degiskenler bir daha degistirilemiyor. !!

//Dinamik degiskenler let ile alınacak statik degiskenler const ile tutulacak.

