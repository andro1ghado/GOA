/*
    მომხმარებელმა უნდა შემოიტანოს რიცხვი 1 - დან 1000 - მდე, თქვენი მიზანია, რომ გამოიცნოთ შემოტანილი რიცხვი, თუ სწორი იქნება დაპრინტეთ 'სწორია!', ხოლო თუ არასწორია, დაპრინტეთ ;არასწორია!'
*/

let promptData = Number(prompt(`Enter Number from 1 to 1000`))

if (promptData === 560) {
    console.log(`correct`)
}
else if (promptData > 1000) {
    console.log(`Error`)
}
else if (promptData < 1) {
    console.log(`Error`)
}
else {
    console.log(`Try Again`)
}