var navMenu = document.getElementsByClassName('navigation__background');
var menuOpened = document.getElementsByClassName('navigation__checkbox:checked');  
var navLink = document.getElementsByClassName('navigation__link');

navLink.addEventListener('click', function() {
  navMenu.classList.remove('navigation__checkbox:checked');
});
