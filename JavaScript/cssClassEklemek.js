//Class eklemek veya cikarmak

//class etiketi ile elemente ulasıldı.
let greeting = document.querySelector("#greeting")
//Null deger gordukten sonra add ile sınıf eklendi
greeting.classList.add("textPrimary")
//Aynı anda iki class ekleme yöntemi
greeting.classList.add("title","secondClass")

//Class kaldırmak için remove kullanılır.
greeting.classList.remove("title")
console.log(greeting.classList)