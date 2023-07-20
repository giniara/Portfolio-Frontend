const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('button')
const iconClose = document.querySelector('.icon-close')
const btnDown = document.querySelector('.fa-solid.fa-download');


registerLink.addEventListener('click', ()=> { 
    wrapper.classList.add('active');});
loginLink.addEventListener('click', ()=> { 
    wrapper.classList.remove('active');});
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');});
btnDown.addEventListener('click', ()=> {
    btnDown.classList.add('active');
});   
