let items = [1,2,3,4,5]
let femaleUsers = ["Ayse","Hulya","Merve"]
let maleUsers = ["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items.length)
console.log(items[0].length) // ->  İlk eleman dizi oldugu icin ilk elemanın
//uzunluguna ulasildi.
console.log(items[0][0]) // -> ilk eleman dizi oldugu icin dizinin
//ilk elemanına [0][0] ile ulasildi.

//Array icerisinden oge ayirmak ->splice(pos,item)
let newItem = items.splice(2,3)
console.log(newItem, items)

//array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))

//Array kopyalamak
let copyItems = items

copyItems.pop()
console.log(items)

//Arrayler referans tipli degiskenler.
// esitleme islemi arraylarda bellek üzerinde aynı adresi isaret 
//etmelerini sagliyor. Yapilan bir degisiklik 2 ogeyi de etkiliyor.
//Kopyalamak icin slice fonksiyonu kullaniliyor.

copyItems = items.slice()
copyItems.pop()
console.log(items)
console.log(copyItems)

//Artık 2 farkli oge oldular ve degisiklikleri birbirlerini etkilemiyor.