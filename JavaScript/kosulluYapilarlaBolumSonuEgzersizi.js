//Kosullarla bolum sonu egzersizi
/* Prompt ile alınan bilgiyi ekrana #info ile yazdır.
AA- 90-100
BA- 85-89
BB- 80-84
CB- 75-79
CC- 70-74
DC- 65-69
DD- 60-64
FD- 50-59
FF- 0-49


Kullanıcının girdiği verinin istenilen aralıkta olup olmadığını kontrol et.
ff bilgisinde uzgun surat çıkar diğerlerinde gulen yuz olsun
ff class bilgisi text danger, digerlerinin ise text-primary olsun.

*/

const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

const SAD = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>

`

let not = prompt("Lutfen not bilginizi giriniz: ");
let harfNotu;
let info = document.querySelector("#info");

if(not>=0 && not <=100 )
{
    harfNotu = SMILE;
    info.classList.add("textPrimary")
    if(not>=90){
        harfNotu += " AA"
    }

    else if(not>=85 && not<=89){
        harfNotu += " BA";
    }

    else if(not>=80 && not<=84){
        harfNotu += " BB";
    }

    else if(not>=75 && not<=79){
        harfNotu += " CB";
    }

    else if(not>=70 && not<=74){
        harfNotu += " CC";
    }

    else if(not>=65 && not<=69){
        harfNotu += " DC";
    }
    else if(not>=60 && not<=64){
        harfNotu += " DD";
    }
    else if(not>=50 && not<=59){
        harfNotu += " FD";
    }
    else{
        info.classList.add("textDanger");
        info.classList.remove("textPrimary");
        harfNotu = `${SAD} FF`;
    }

}

else
{
    harfNotu = "Lutfen 0 ile 100 arasında Sayi giriniz!";
}


info.innerHTML = `${harfNotu} --> ${not}`;


