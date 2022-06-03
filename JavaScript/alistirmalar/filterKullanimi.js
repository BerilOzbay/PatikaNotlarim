//Array filter Kullanımmı

//5 harften daha fazla olanlar bulunur ve yeni listeye eklenir
const PRODUCTS = ["Mic","Cable","Speaker","Desktop Pc","Server","Mouse","Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5 )
console.log(NEW_PRODUCTS)


const USERS = [
    {fullname: "Ayse Sumer", isActive: false},
    {fullname: "Ahmet Urgan", isActive: true},
    {fullname: "Asya Basar", isActive: true},
    {fullname: "Aksel Durmaz", isActive: false},
]

const ACITVE_USERS = USERS.filter( user => user.isActive === true)
console.log(ACITVE_USERS)
console.log("selam")