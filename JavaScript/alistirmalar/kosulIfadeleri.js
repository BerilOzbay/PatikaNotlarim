// Kosul Ifadeleri -> Eger 

// kullanici bilgisi varsa ekrana ismini yazdir.
let userName = prompt("Kullanici adinizi giriniz: ")
let age = prompt("Yasiniz: ")
let info = document.querySelector("#info")

// if kısmında kosul parantez içinde verilirken, else de koşul yoktur.

//if kısmı true ile çalişir.
if(userName.length > 0) {
    console.log( ` Kullanıcı bilginiz: ${userName}`)
}
else{
    console.log(`Lutfen kullanıcı adınızı giriniz.`)
}

if(userName.length> 0 && age >=18){
    info.innerHTML = "Ehliyet Alabilirisiniz"
}

else if(!userName){
    info.innerHTML = "Kullanici adiniz yok"
}

else if(!(age>=18)){
    info.innerHTML = "Yasiniz 18'den kucuk veya yas bilgisi girilmemis"
}

// Ternary Operatorleri -> Kısa if else yapısı:
// kosul ? doğruysa : yanlissa

age >=18 ? console.log("Ehliyet alabilirsin") : console.log("Ehliyet için küçüksün")

