const ham = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

ham.addEventListener('click', (evt) => { 
  navUl.classList.toggle('reveal');
});