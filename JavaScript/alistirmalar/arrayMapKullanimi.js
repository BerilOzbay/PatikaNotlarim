//Array map kullanımı

const USERS = ["AYSE","MehMet","TugCE","AkSEL"]

//userName icinde orijinal kalsin.
//shortName icinde ilk harf buyuk 
//newName icinde ilk harf buyuk

const NEW_USERS = USERS.map( user => user.toLowerCase())
console.log(NEW_USERS)

// Obje dondurecegimiz zaman sarmal yapı icerisinde => dan sonra () acıp icine ifadeyeyi yazıp dondurmeyi saglayabiliriz.
const USERS_OBJ = USERS.map( item => (
    
    {userName: item, shortName:`${item[0]}.`, newName: `${item[0].toUpperCase()} ${item.slice(1).toLowerCase()}` }
    
    )
    
)

console.log(USERS_OBJ)