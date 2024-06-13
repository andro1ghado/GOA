/*
    hw: 6)  შექმენით ფუნქცია სახელად isValidCoupon, რომელიც იღებს ორ პარამეტრს: couponCode (სტრინგი) და totalAmount (რიცხვი). ფუნქცია უნდა დაბრუნდეს true, თუ კუპონის კოდი არის "SALE" ან "BIGSALE" და ჯამური თანხა მეტია ან ტოლია 50-ზე, ან თუ კუპონის კოდი არის "LILSALE" მთლიანი თანხის მიუხედავად. წინააღმდეგ შემთხვევაში, ის უნდა დაბრუნდეს false. გამოიყენეთ "და" (&&) და "ან" (||)

*/

function isValidCoupon(couponCode, totalAmount) {
    if (couponCode === 'SALE' ||couponCode ===  'BIGSALE' || couponCode === 'LILSALE' || totalAmount >= 50) {
        return true
    }
    else if (couponCode != 'SALE' || 'BIGSALE' || 'LILSALE' || totalAmount < 0 || totalAmount != Number) {
        return `Error`
    }
}

console.log(isValidCoupon(prompt(`Enter Coupon Code`), Number(prompt(`Enter Total Amount`))))