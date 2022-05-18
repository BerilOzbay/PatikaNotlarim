//String Veri Turu Islemleri

let email = "berilozbay@gmail.com"
let firstName = "Beril"
let lastName ="Ozbay"

//karakter sayisini bulmak
console.log(email.length)

//Ilk Karakteri bulmak
console.log(email[0])
console.log(email.charAt(0))

//Buyuk harf kucuk harf yapmak
firstName = firstName.toUpperCase()
console.log(firstName)

lastName= lastName.toLowerCase()
console.log(lastName)

//String icinde istenilen bilgiyi arama yerini bulma ->
console.log(email.search("@"))
console.log(email[10])

// -> string içinde olmayan bir veri aradığımızd search ifadesi -1 döndürür.

// İfadenin belirli bir yere kadar olan kısmını almak
let DOMAIN = email.slice(email.search("@") +1)
console.log(DOMAIN)

DOMAIN =DOMAIN.slice(0,DOMAIN.indexOf('.'))
console.log(DOMAIN)
