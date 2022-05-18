// Promt ile bilgi almak

let fullName = prompt("Lutfen kullanıcı adını giriniz")

//id olduğu için css de olduğu gibi # koyularak yazılır
let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style ="color:red">${fullName}</small>`


