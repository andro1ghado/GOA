/*
  hw: Object Literal დახმარებით შექმენით ობიექტი, გადაეცით 10 თვისება, ესენია: სახელი, გვარი, ასაკი, ქვეყანა, ქალაქი, საყვარელი ფერი, საყვარელი საჭმელი, საყვარელი მანქანა, საყვარელი პროგრამირების ენა და საყვარელი აკადემია. შემდგომ ამ თვისებებზე გადაცემული მნიშვნელობებით ააწყვეთ ერთი დიდი წინადადება.
*/

let obj = {
    name: 'Andria',
    lastName: 'Gaduashvili',
    age: 13,
    nation: 'Georgia',
    city: 'Tbilisi',
    favouriteColor: 'Green',
    favouriteFood: 'Shaurma',
    favouriteCar: 'Lamborgini',
    favouriteProgrammingLanguage: 'Phython and C#',
    favouriteAcademy: 'GOA'
}

alert(`Hello i am ${obj.name} ${obj.lastName}. im ${obj.age} years old. I from ${obj.nation}. I live in ${obj.city}. my favourite color is ${obj.favouriteColor} and favourite food is ${obj.favouriteFood}. My favourite car: ${obj.favouriteCar}. My favourite programming languages are ${obj.favouriteProgrammingLanguage}. and there is only one answer to this question, because my favourite academy is ${obj.favouriteAcademy}. ${obj.favouriteAcademy} BEST`)