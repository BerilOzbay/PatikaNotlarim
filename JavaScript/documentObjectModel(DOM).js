//DOM

console.log(document.URL)
console.log(document.baseURI)

console.log(document.location.pathname)

console.log(document.head)
console.log(document.body)

//Css tarafında statik bir erişim sağladığımız ayarlarda Dom ile js kullanarak
//dinamik bir hale getirebiliriz.

document.body.style.background = "aqua"

//Dom'da çalışırken, çalışılacak alanın belirtilmesi önemli bir noktadır.

//belge içideki bir bilgiyi değiştirme ->

//let title = document.getElementsByTagName('h2') -> kabul gören yöntem değildir.
let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi" 
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")
link.innerHTML += " değişti"
link.style.color = "red"
link.classList.add("btn")
