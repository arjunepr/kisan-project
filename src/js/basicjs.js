// This is to update the counter for the message textarea.

const message = document.getElementById('message');
const current = document.getElementById('current');

message.addEventListener('input', (evt) => {
  current.innerHTML = evt.target.value.length;
})



// This is for the menu to appear on mobiles and tablets on clicking the hamburger button.

const ham = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

ham.addEventListener('click', (evt) => {
  navUl.classList.toggle('reveal');
});