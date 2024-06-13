/*
    homework:
    გამოთვალეთ რიცხვის ფაქტორიალი. (ფაქტორული არის მათემატიკური ოპერაცია, რომელიც წარმოდგენილია სიმბოლოთი !. იგი გამოიყენება ყველა დადებითი რიცხვის ნამრავლის გამოსათვლელად 1-დან მოცემულ დადებით რიცხვამდე მაგალითად 5ის ფაქტორიალია 1* 2* 3* 4* 5)
*/

function factorialize(num) {
    let result = num

    if (num == 0 || num == 1) {
        return `Factor is: 1`
    }
    while(num > 1) {
        num--
        result *= num
    }
    return `Factor is: ${result}`
}

console.log(factorialize(Number(prompt(`Enter Number: `))))