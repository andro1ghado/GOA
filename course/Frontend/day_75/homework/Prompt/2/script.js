/*

დაწერეთ ფუნქცია, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს ნივთების რაოდენობა, რომლის შეძენაც სურს.
დარწმუნდით, რომ მომხმარებელმა შეიყვანს დადებითი რიცხვი მთლიანი ერთეულებისთვის.
თითოეული ნივთისთვის, შესთავაზეთ მომხმარებელს შეიყვანოს ფასი.
დარწმუნდით, რომ მომხმარებელმა შეიყვანოს დადებითი ნომერი თითოეული პროდუქტის ფასისთვის.
გამოთვალეთ და აჩვენეთ ყველა ელემენტის მთლიანი ღირებულება.

*/

function main(amount, price) {
    if (amount < 1) {
        return `Error`
    }

    if (price < 0.01) {
        return `Error`
    }

    let total = amount * price
    return `Total Costs: ${total}$. Amount of products: ${amount}.x`
}

console.log(main(Number(prompt(`Enter Amount Of products.`), Number(prompt(`Enter Price.`)))))