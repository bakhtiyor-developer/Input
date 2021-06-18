let nameInput = document.querySelector('.name-input');
let surnameInput = document.querySelector('.form__input-surname');
let emailInput = document.querySelector('.form__input-email');
let formBtn = document.querySelector('.form-btn');
let username = document.querySelector('.usernameis');
let surname = document.querySelector('.surnameis');
let useremail = document.querySelector('.emailaddressis');

formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    answerBox.style.display = "block"
    mainForm.classList.remove('form-height');
    if(nameInput.value, surnameInput.value, emailInput.value == "") {
        alert("Iltimos so'rovnomani to'ldiring!");
    } else {
        username.textContent = nameInput.value
        surname.textContent = surnameInput.value
        useremail.textContent = emailInput.value
        username.appendChild(username);
        surname.appendChild(surname);
        useremail.appendChild(useremail);
    }
})

let closingBtnYellow = document.querySelector('.answer-yellow-btn');
let closingBtnGreen = document.querySelector('.answer-green-btn')
let closingBtn = document.querySelector('.std-asnwer-btn');
let answerBox = document.querySelector('.answer-box');
let mainForm = document.querySelector('.main-form');

closingBtn, closingBtnYellow, closingBtnGreen.addEventListener('click', function(e) {
    e.preventDefault
    answerBox.classList.add("display-none")
    mainForm.classList.add('form-height');
})