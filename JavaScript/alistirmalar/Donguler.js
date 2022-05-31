//Dongulerle Calismak
//For Dongusu

let users= ["Lorem", "Ipsum", "Dolor"]

for ( let index = 0; index<10; index++){
    console.log(index)
}

const userListDOM = document.querySelector("#userList")

for (let i = 0; i<users.length ; i++){
    //Dongu uzunlugu kadar li elementi olusturduk
    const liDOM = document.createElement('li')
    //innerHTML ile li elementleri icine bilgileri yazdırdık.
    liDOM.innerHTML = users[i]
    //li elementleri userDOM'un içine eklendi.
    userListDOM.appendChild(liDOM)
}

//While Dongusu
//Bir şey olana kadar ifadesi geçerlidir. 

// let counter = 0;
// while( counter <10) {
//     console.log(counter)
//     counter += 1;
// }

// let userName;
// while(!userName) {
//     userName = prompt("Kullanici adini giriniz: ")
//     console.log(userName)
// }

// forEach Dongusu
//forEach array içerisinde kullanılır. For'un daha esnek bir yapısı vardır.

const PRODUCTS  = ["Laptop", "Phone","Speaker","Desktop Pc","Server","Mouse","Keyboard"]

PRODUCTS.forEach((product,index,array) => array[index] = `${product.toUpperCase()}`)
console.log(PRODUCTS)