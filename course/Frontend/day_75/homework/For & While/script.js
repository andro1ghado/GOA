/*
    hw: მომხმარებელს შემოატანინეთ რიცხვი და გამოიცანით შემოტანილი რიცხვი, იქამდე სცადეთ რიცხვის გამოტანა სანამ სწორს არ შეუყვანთ
*/

function guessNumber(n) {
    if (n < 0) {
        return `Error`
    }
    i = -1
    while(i < n) {
        i++
        if (i === n) {
            alert(`This is your number: ${i}`)
        }
    }
}

console.log(guessNumber(Number(prompt(`Enter Any Positive number`))))