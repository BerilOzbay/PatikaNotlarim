//Butonlara tiklayinca arttirma veya azaltma islemi yapan fonksiyon.

// butonların ve sayacin etiketleri üzerinden verilere erisildi.
let counterDOM = document.querySelector("#counter");
//Sayac degiskeni tanimlandi.
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

//counter degiskeninin h3 basligina yazilmasi saglandi.
counterDOM.innerHTML = counter
//Butonları dinleyerek basilma islemi kontrol edildi
increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)
//ClickEvent fonksiyonu ile tiklanilan butonun etiketi kontrol edildi. İncrease ise +1 
//decrease ise-1 uygulandı ve counter degiskeni üzerinden h3 basligina yazildi.
function clickEvent()
{
    console.log(this.id)
   this.id == "increase" ? counter +=1 : counter -=1
   localStorage.setItem('counter',counter)
   counterDOM.innerHTML = counter
}