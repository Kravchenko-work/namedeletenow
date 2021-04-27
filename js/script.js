//Анимация



//Отправка в файл php с помощью fetch
let form = document.getElementById('form');

form.onsubmit = async (e) => {
	e.preventDefault();

	if (formValidate()) return;

	let form__wrapper = document.querySelector('.form__wrapper');
	form__wrapper.classList.add('sending');

	let form__result = document.querySelector('.form__result');

	let formData = new FormData(form);
	formData.append('date', document.querySelector('.form__date').textContent);

	let url = "/send.php";
	let response = await fetch(url, {
		method: 'POST',
		body: formData,
	});
	
	if (!response.ok){
		form__wrapper.classList.remove('sending');
		form__result.innerHTML = "Данные не отправились! Произошла ошибка во время получения заголовков ответа с сервера";
		form__result.style.color = '#ff4a4a';
		return;
	}

	let result = await response.json();

	if (result.message == "Error"){
		console.log('yes');
		form__wrapper.classList.remove('sending');
		form__result.innerHTML = "Данные не отправились! Произошла ошибки при обработке данных на сервере";
		form__result.style.color = '#ff4a4a';
		return;
	}
	
	form.reset();
	document.querySelector('.form__date').innerHTML = "__ / __ / ____";
	form__result.innerHTML = result.message;
	form__result.style.color = "#19d315";
	form__wrapper.classList.remove('sending');
};


//Маска для поля с телефоном
let form__tel = document.getElementById('form__tel');
form__tel.addEventListener('input', function (e) {
  var x = e.target.value.slice(3).replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = "+7 " + (!x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : ''));
  
});
form__tel.addEventListener('blur', function (e) {
  if (e.target.value.length == 3) e.target.value = ""; 
  
});
form__tel.addEventListener('focus', function (e) {
	if (e.target.value.length == 0) e.target.value = "+7 ";
});




//Дата-пикер для поля с датой
let form__date = document.querySelector('.form__date');
let block__date = document.querySelector('.block__date');

form__date.addEventListener('focus', function(e){
	form__date.classList.add('form__input-focus');

	form__date.innerHTML = `${day}  /  ${month}  /  ${year}`;//переменные из файла "datemask.js"

	block__date.style.visibility = 'visible';
	block__date.style.height = '100%';

});

document.addEventListener('click', function(e){
	if (block__date.style.visibility != 'visible') return;

	if (e.target.closest('.form__date') || e.target.closest('.block__date')) return;
	
	block__date.style.visibility = 'hidden';
	block__date.style.height = '0px';
	form__date.classList.remove('form__input-focus');
});


// Валидация полей формы

function formValidate(){
	let error = 0;
	let formElem = document.querySelectorAll('.form__input');

	for (let i = 0; i < formElem.length - 1; i++){
		
		let elem = formElem[i];

		if (elem.id == "form__mail") {
			if (emailTest(elem)) {
				formAddError(elem);
				error++;
			}
		} else if (elem.id == "form__date") {
			if (!elem.textContent.match(/\d+/)){
				formAddError(elem);
				error++;
			}
		 }
		else if (elem.id == "form__tel"){
			if (elem.value.match(/\d/g)?.length != 11){
				formAddError(elem);
				error++;
			}
		}
		else {
			if (elem.value = ""){
				formAddError(elem);
				error++;
			}
		}
	}
	return error;
}

document.addEventListener('focusin', function(e){
	if (e.target.classList.contains('form__input') && e.target.type != 'submit')
		formDeleteError(e.target);	
});

function formAddError(elem) {
	elem.classList.add('error__input');
	elem.nextElementSibling.classList.add('error__hint__show');
}
function formDeleteError(elem) {
	elem.classList.remove('error__input');
	elem.nextElementSibling.classList.remove('error__hint__show');
}

function emailTest(text) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(text.value);
}
