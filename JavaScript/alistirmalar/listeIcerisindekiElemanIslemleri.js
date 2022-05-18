// Liste içerindeki son elemana ulaşmak veya listeye eleman eklemek

let item = document.querySelector("ul#list>li:last-child")
console.log(item)

document.querySelector("ul#list>li:first-child").innerHTML = "degisti"

let item1 = document.querySelector("ul#list>li:first-child")
console.log(item1.innerHTML)

//Listeye yeni oge eklemek için id ile listeye erişildi append ile yeni öge eklendi.

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML  = "Kendi olusturdugumuz oge"
//sona eklemek
ulDOM.append(liDOM)
//başa eklemek
ulDOM.prepend(liDOM)

