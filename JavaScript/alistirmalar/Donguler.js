//Dongulerle Calismak

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