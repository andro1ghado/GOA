/*
hw:   hw: Object Constuctor დახმარებით შექმენით ობიექტი, გადაეცით 10 თვისება, ესენია: სახელი, გვარი, ასაკი, ქვეყანა, ქალაქი, საყვარელი ფერი, საყვარელი საჭმელი, საყვარელი მანქანა, საყვარელი პროგრამირების ენა და საყვარელი აკადემია. შემდგომ ამ თვისებებზე გადაცემული მნიშვნელობებით ააწყვეთ ერთი დიდი წინადადება. 
*/

function object(name, lastName, age, nation, city, favColor, favFood, favCar, favLanguage, favAcademy) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.nation = nation
    this.city = city
    this.favColor = favColor
    this.favFood = favFood
    this.favCar = favCar
    this.favLanguage = favLanguage
    this.favAcademy = favAcademy
}

let info = new object('Andria', 'Gaduashvili', 13, 'Georgia', 'Tbilisi', 'Green', 'Shaurma', 'Lamborgini', 'Phython and C#', 'GOA')

alert(`Hello i am ${info.name} ${info.lastName}. I am ${info.age} years old. i from ${info.nation} and i live in ${info.city}. my favourite color is ${info.favColor} and my favourite food is ${info.favFood}. my favourite car is ${info.favCar}. my favourite languages are ${info.favLanguage}, and of course, there is only one answer to this question because ${info.favAcademy} is best academy!`)