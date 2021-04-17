//Анимация
document.querySelector('.form__text').addEventListener('focus', function(){
	this.value ="";
});

document.querySelector('.form__text').addEventListener('blur', function(){
	this.value ="Введите имя";
});


//Отправка в файл php
let form = document.getElementById('form');

form.addEventListener('submit', function(e){
	e.preventDefault();
});