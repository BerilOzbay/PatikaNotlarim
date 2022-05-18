//Fonksiyonlar

function hello() {
    console.log("Merhaba");
}

//Temel Kurallar:
//Bir fonksiyon parametre alabilir veya almayabilir.
//Bir fonksiyon disariya bilgi return edebilir ya da göndermeyebilir.
//Fonksiyonun az bagimli olmasi istenir.

// let firstName = "Lorem"

function greetings(firstName) {
    console.log(`Merhaba ${firstName ? firstName : ""}`)
}

function hello(firstname) {
    console.log(`Merhaba ${firstname}`)
}
hello("Kodluyoruz")

//Arrow function tanımı - Fonksiyon tanımlamanın bir başka yolu-
//Function yerine const ile fonksiyonu tanımlıyoruz. ( ) içine verilen bilgi parametre bilgisidir.
// => işaretinden(fat arrow) sonra return ifadesi yer alıyor.

const helloFuncV1 = (firstname) => { console.log(`Merhaba ${firstname}`) }
helloFuncV1("Java")
//Tek parametre veya tek returbn ifademiz varsa parantezleri kullanmak zorunda değiliz.
const helloFunV2 = firstname => console.log(`Merhaba ${firstname}`)
helloFunV2("Script")

const helloFunV3 = (firstname, lastName) => console.log(`Merhaba ${firstname} ${lastName}`)
helloFunV3("C", "#")
