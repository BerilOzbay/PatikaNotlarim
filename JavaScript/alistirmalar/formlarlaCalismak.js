//Form submit:
//Form içinde bulundurduğu form elementlerinin name'leri sayesinde değerlerini 
//alıp bu değerlerle işlem yapmanıza olanak sağlayan bir yapıdır.

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener('submit',formSubmit);

function formSubmit()
{
    //get parametreleri url'e dusmesi engellendi. ( default islem)
    event.preventDefault();
    console.log("Her sey yolunda");
    // input bilgisi alinip islem gerceklestirildi.
    let scoreInputDOM = document.querySelector('#score');
    localStorage.setItem('score',scoreInputDOM.value);
}