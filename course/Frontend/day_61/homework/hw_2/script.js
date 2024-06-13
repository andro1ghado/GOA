/*
    homework:
    შექმენით ფუნქცია რომელსაც მიანიჭებთ ობიექტს სადაც შეიყვანთ თქვენი ოჯახის წევრების ასაკებს და შემდგომში  მოახდენთ მათზე მათემატიკურ ოპერაციებს
*/

function main() {
    let obj = {
        yourAge: Number(prompt(`Enter Your Age: `)),
        mumAge: Number(prompt(`Enter Mum Age: `)),
        dadAge: Number(prompt(`Enter Dad Age: `))
    }

    let calculate = obj.yourAge - obj.mumAge + obj.dadAge

    return `Calculation: ${calculate}`
}

console.log(main())