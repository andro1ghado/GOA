/*

დაწერეთ ფუნქცია, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს წონა (კილოგრამებში) და სიმაღლე (მეტრებში). გამოთვალეთ სხეულის მასის ინდექსი (BMI) ფორმულის გამოყენებით: BMI = წონა / (სიმაღლე * სიმაღლე). გამოთვლილი BMI-დან გამომდინარე, მიაწოდეთ მომხმარებლის ჯანმრთელობის შეტყობინება: თუ BMI 18.5-ზე ნაკლებია, აჩვენეთ "Underweight". თუ BMI არის 18.5-დან 24.9-მდე,ჩვენება "ნორმალური წონა". თუ BMI არის 25-დან 29.9-მდე, აჩვენეთ "Overweight". თუ BMI არის 30 ან მეტი, აჩვენეთ "სიმსუქნე". აჩვენეთ გამოთვლილი BMI და ჯანმრთელობის შეტყობინება გამოყენებისთვის

*/

function BMI(weight, height) {
    let index = weight / (height * height)

    if (index < 18.5 && index > 0) {
        return `Underweight`
    }
    else if (index > 18.5 && index < 24.9) {
        return `Normal`
    }
    else if (index > 24.9 && index < 29.9) {
        return `Overweight`
    }
    else if (index > 30) {
        return `სიმსუქნე`
    }
}

console.log(BMI(Number(prompt(`Enter Your Weight.`)), Number(prompt(`Enter Your Height.`))))