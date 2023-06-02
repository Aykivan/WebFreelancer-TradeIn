let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function () {
	let user__menu = document.querySelector('.user-header__menu');
	user__menu.classList.toggle('_active');
});

let header__menu = document.querySelector('.header__menu');
header__menu.addEventListener("click", function () {
	let
		menu__icon = document.querySelector('.menu__icon');
	menu__icon.classList.toggle('active');
});