/*
    homework:
      შემოატანინეთ მომხარებელს თავის მაილი და პაროლი შემდგომში შეამოწმეთ არის თუ არა სწორად შეყვანილი მაშინ დააკონსოლოს "you have permission "     თუ არასწორად შეიყვანა დაუწერეთ "You don't have permission"
*/

function main() {
    let mail = prompt(`Enter Your Mail`)
    let pw = prompt(`Enter Your Password`)
    
    alert(`Log in to your account.`)

    if (mail == `andriaisevencooler@hotmail.com` && pw == `12345678910`) {
        return `Access Granted!`
    }
    else {
        return `Try Again!`
    }
}

console.log(main());