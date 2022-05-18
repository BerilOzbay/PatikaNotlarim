//Boolean Veri Turu ile Çalışmak
let isActive = true;
console.log(isActive)

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

/*Boolean içerisinde 11 gönderirsek,0 gönderirsek true olarak dönüyor.
Boş çift tırnak gönderdiğimiz zaman false olarak dönüyor.
Boolean içersinde veri varsa true yoksa false olarak gösteriyor.
Boolean(0) -> false
Boolean(0 === 0) -> true
Boolean (-0) ->false */

var x=10/'a';
console.log(Boolean(x));

var y=""||-2||'JavaScript';
console.log(Boolean(y));


var z= {2:'js'};
console.log(Boolean(z));

var a=true;
console.log(Boolean(a))
