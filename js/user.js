'use strict'
const elUsernameSignUp = document.querySelector('#usernameSignUp');
const elUsernameLogin = document.querySelector('#usernameLogin');
const elEmail = document.querySelector('#email');
const elPasswordSignUp = document.querySelector('#passwordSignUp');
const elPasswordLogin = document.querySelector('#passwordLogin');
const elRepeatPassword = document.querySelector('#repeat-password');
const elSignUp = document.querySelector('#sign-up');
const elLoginBtn = document.querySelector('#login-button');


function checkUsernameSignUp(){
    let elMsg = document.querySelector('#feedbackSignUp');
    if (!(elUsernameSignUp.value.length < 5) || elUsernameSignUp.value === '') {
        elMsg.textContent = '';
    } else {
        elMsg.textContent = 'Username must be 5 characters or more';
    }
}

function checkUsernameLogin(){
    let elMsg = document.querySelector('#feedbackLogin');
    if (elUsernameLogin.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

function checkRepeatPassword(){
    let elMsg = document.querySelector('#feedbackRepeatPassword');
    if(elPasswordSignUp.value === elRepeatPassword.value || elRepeatPassword.value === ''){
        elMsg.textContent = '';
    }else{
        elMsg.textContent = 'Passwords do not match';
    }
}

function signUp(event){
    if(elUsernameSignUp.value.length < 5){
        event.preventDefault();
    }else if(elPasswordSignUp.value !== elRepeatPassword.value){
        event.preventDefault();
    }else{
        localStorage.setItem(elPasswordSignUp.value, elUsernameSignUp.value);
    }
}

function loginBeforeRate(event){
    let elMsg = document.querySelector('#loginBeforeYouRate');

    elMsg.innerHTML = 'Please log in or register to rate this dish.';
    event.preventDefault();
}

var modal = document.getElementById('login');
var modal2 = document.getElementById('signUp');


function login(event) {
    let username = localStorage.getItem(elPasswordLogin.value);
    let elMsg = document.querySelector('#wrongUsernameOrPassword');
    if (elUsernameLogin.value !== username) {
        elMsg.textContent = 'Invalid username or password.'
        event.preventDefault();
    } else {
        modal.style.display = "none";
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
}

elUsernameSignUp.addEventListener('blur', checkUsernameSignUp, false);
elUsernameLogin.addEventListener('blur', checkUsernameLogin,false);
elRepeatPassword.addEventListener('blur', checkRepeatPassword, false);
elSignUp.addEventListener('click', signUp, false);
elLoginBtn.addEventListener('submit', login, false);



