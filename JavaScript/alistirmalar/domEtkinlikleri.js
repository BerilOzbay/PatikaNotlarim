//Dom etkinlikleri ile calismak

/*
//dom üzerinden id ile veriye erisim saglanir.
let greeting =document.querySelector("#greeting")
//click islemi dinlenir.
greeting.addEventListener("click",domClick)

//Click islemi ile birlikte innerHTML ile bilgi degistirilir. ->console.log(this.innerHTML ="Bilgi Degisti")
function domClick()
{
    console.log("tiklandi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
    
}
*/

//Mouse ile üstüne gelindiğinde rengin degismesi saglanir.
let greeting =document.querySelector("#greeting")
//mouseover islemi ile izlenşr.
greeting.addEventListener("mouseover",domMouseOver)

//Mouseover islemi ile birlikte innerHTML ile bilgi degistirilir. ->console.log(this.innerHTML ="Bilgi Degisti")
function domMouseOver()
{
    console.log("Etkinlik calisiyor")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
    
}