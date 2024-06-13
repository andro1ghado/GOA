/*
    homework:
    შექმენით საიტი სადაც მომხმარებელს prompt ის გამოყენებით შემოატანინებთ 2 რიცხვს, ამ ორ რიცხვს შორის ჩაატარეთ არითმეტიკული ოპერაციები და დაბეჭდეთ კონსოლში
*/

let starterConfirm = confirm('Hey! This site is about mathematical operator (-) between A and B. Do you want to try?')

if(starterConfirm === true) {
    alert('Great! Lets get started.')
    
    let a = prompt('Enter a (var) number')
    alert('Good!')
    let b = prompt('Enter b (var) number')
    
    let finalConfirm = confirm('Do you want to see result?')
    
    if(finalConfirm === true) {
        alert('Alright! Click "OK" to see result!')
        alert(`Result: ${a} - ${b} = ${a-b}`)
    }
    else {
        alert('ok, as you wish!')
    }
}
else {
    alert('ok bye!')
}