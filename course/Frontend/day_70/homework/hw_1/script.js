/*
    homework:
    ააგეთ საიტი ნებისმიერ თემატიკასთან დაკავშირებით და შემდეგ ამ საიტზე არსებული დიზაინი შეცვალეთ JS ფაილიდან(DOM გამოყენებით)
*/

const text = document.getElementById('text')
const logo = document.getElementById('logo')





text.addEventListener('mouseover', function() {
    text.textContent = 'Join Us Now!'
})

text.addEventListener('mouseout', function() {
    text.textContent = 'Goal Oriented Academy'
})

logo.addEventListener('mouseover', function() {
    logo.src = 'images/goa.png'
})