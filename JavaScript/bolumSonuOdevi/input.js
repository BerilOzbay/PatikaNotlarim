let name = prompt("Lutfen adinizi giriniz: ")

let info = document.querySelector("#info")
info.innerHTML += ` Merhaba! ${name} Hoş geldin!` 

function Time(){
let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let today = new Date();
let date = document.querySelector("#date")
date.innerHTML = ` ${today.getHours()} :${today.getMinutes()}: ${today.getSeconds()} ${gunler[today.getDay()]}`
setTimeout(Time,1);
}

Time();