let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function () {
	let user__menu = document.querySelector('.user-header__menu');
	user__menu.classList.toggle('_active');
});

let header__menu = document.querySelector('.icon-menu');
header__menu.addEventListener("click", function () {
	let menu__icon = document.querySelector('.icon-menu');
	let menu__body = document.querySelector('.menu__body');
	menu__icon.classList.toggle('active');
	menu__body.classList.toggle('active');
});