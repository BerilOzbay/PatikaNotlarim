//Break && Continue
const LOREM_LIST = 
[
    'lorem', 'ipsum', 'dolor','amet','consectetur','adipisicing','elit'
] 
let counter = 0;
//5'e kadar yazdı ve durdu
for(; counter < 10; counter++ ){
    if(counter === 5 ){
        break;
    }
    console.log(counter)
}

//5' e eşit olunca atladı ve yazmaya devam etti.
for(; counter < 10; counter++ ){
    if(counter === 5 ){
        continue;
    }
    console.log(counter)
}

const UL_DOM = document.querySelector("#userList")

for (i = 0; i<LOREM_LIST.length; i++)
{
    if(LOREM_LIST[i] == "dolor")
    {
        break;
    }

    let Lİ_DOM = document.createElement('li')
    Lİ_DOM.innerHTML = LOREM_LIST[i]
    UL_DOM.appendChild(Lİ_DOM)
}