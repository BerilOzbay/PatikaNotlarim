//Template Literals Kullanimi

let username = "Beril"
const Domain = "kodluyoruz.org"

let email =username + "@" + Domain
//console.log("Merhaba",username, "sitemize hoşgeldin", "mail adresin:",email)

let info = `Merhaba ${username} sitemize hosgeldin.. Mail adresin ${email}
mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2+3)*5} tl
gunun saat bilgisi: ${new Date().getHours()}
`
console.log(info)

/* Template Literals yeni yazım tarzı olarak kullanılıyor. Normalde 
çift tırnağın izin vermeyeceği kullanımlara olanak sağlıyor. ``(backtick) ifadesi
içinde olunduğu sürece ${} şeklinde degiskenleri tanımlayarak string ifadeler
ile virgülsüz bir biçimde yazılması sağlanıyor. ${} içesinde fonksiyonlar çağrılıp,
hesaplamalar yapılabiliyor.*/