/*

    homework:
    შექმენით ფუნქცია, რომელიც გამოითვლის მართკუთხედის ფართობს.

*/

function square(width, height) {
    return `ფართობი: ${width * height}`
}

console.log(square(Number(prompt(`Enter Width of Square`)), Number(prompt(`Enter Height of Square`))))