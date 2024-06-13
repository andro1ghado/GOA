/*
    homework:
     დაწერეთ პირობითი დებულება, რომელიც ამოწმებს არის თუ არა რიცხვი 10-ზე მეტი. თუ ასეა, დაბეჭდეთ „რიცხვი მეტია 10-ზე“; წინააღმდეგ შემთხვევაში დაბეჭდეთ „რიცხვი არ არის 10-ზე მეტი“.
*/

function main() {
    const num = Number(prompt(`Enter any number: `))

    if (num > 10) {
        console.log('Number Greater than 10')
    }
    else {
        console.log("Number less than 10")
    }
}

main()