/*
    homework:
    დაწერეთ პირობითი დებულება, რომელიც ამოწმებს რიცხვი დადებითია, უარყოფითი ან ნული. დაბეჭდეთ შესაბამისი შეტყობინება თითოეული შემთხვევისთვის. 
*/

function main() {
    const num = Number(prompt(`Enter ANY number`))

    if (num > 0) {
        console.log(`Number: Positive`)
    }
    else if (num == 0) {
        console.log(`Number: Null`)
    }
    else {
        console.log(`Number: Negative`)
    }
}

main()