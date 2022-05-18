let name = prompt("Lutfen adinizi giriniz: ")

let info = document.querySelector("#info")
info.innerHTML += ` Merhaba! ${name} Hoş geldin!` 

let date = document.querySelector("#date")
date.innerHTML = ` ${new Date().getHours()};`