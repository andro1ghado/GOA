/*
   hw: დაწერეთ JavaScript ფუნქცია იმის დასადგენად, აქვს თუ არა ადამიანს მართვის მოწმობის უფლება მისი ასაკისა და მართვის გამოცდილებიდან გამომდინარე. შესთავაზეთ მომხმარებელს, შეიყვანოს თავისი ასაკი და წლების რაოდენობა, რომელსაც მართავდა. დარწმუნდით, რომ მომხმარებელმა შეიყვანოს სწორი მონაცემები (დადებითი მთელი რიცხვები ასაკისა და მართვის გამოცდილებისთვის). გამოიყენეთ შემდეგი საკვალიფიკაციო კრიტერიუმები: პირი უნდა იყოს მინიმუმ 18 წლის მართვის მოწმობის მისაღებად. თუ პირი 18 წლამდეა, მას არ ექვემდებარება ლიცენზია. თუ პირი არის 18 წლის ან მეტი, მას უნდა ჰქონდეს მინიმუმ 1 წლიანი მართვის გამოცდილება, რომ დაშვებული იყოს. მომხმარებლისთვის აჩვენეთ შეტყობინება, რომელშიც მითითებულია მართვის მოწმობის მიღების უფლება.
*/

function hasPermission(age, driveExperience) {
    if (age >= 18 && driveExperience >= 1) {
        return `Allowed`
    }
    else if (age < 18 || driveExperience != 1) {
        return `Denied`
    }

    if (age < 0 || age > 100 || driveExperience > 100 || driveExperience < 0) {
        return `Error`
    }
}

console.log(hasPermission(Number(prompt(`Enter Your Age.`)), Number(prompt(`Enter Your driving experience (years)`))))