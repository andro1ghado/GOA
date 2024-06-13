/*

hw: შექმენით ფუნქცია სახელად isTeenager, რომელიც იღებს ორ პარამეტრს: ასაკი (რიცხვი) და hasPermission. ფუნქცია უნდა დაბრუნდეს False, თუ ადამიანი არის მოზარდი (18 წლამდე) და არ აქვს ნებართვა აიღოს მართვის მოწმობა, ან თუ ადამიანი არის 18 წლის და აქვს უფლება აიღოს მართვის მოწმობა ფუნქციამ დააბრუნოს true.  გამოიყენეთ "and" (&&) და "or" (||) 

*/

function isTeenager(age, hasPermission) {
    if (age > 100 || age < 0 || hasPermission != true || hasPermission != false) {
        return `Error`
    }

    if (age >= 18 && hasPermission === true) {
        return `You have permission to have driver license`
    }
    else if (age < 18 || hasPermission === false) {
        return `You dont have permission to have driver livense`
    }

}

console.log(isTeenager(Number(prompt(`Enter Your Age`)), Boolean(prompt(`Do you have permission (true or false)?`))))