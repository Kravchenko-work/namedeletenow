//Анимация
document.querySelector('.form__text').addEventListener('focus', function(){
	
	this.value ="";

});

document.querySelector('.form__text').addEventListener('blur', function(){
	this.value ="Введите имя";
});


//Отправка в файл php
let form = document.getElementById('form');
form.onsubmit = async function(e){
	e.preventDefault();

	

	let response = fetch('send.php', {
		method: "POST",
		body: new FormData(this);
	});
	if (response.ok){
		alert('yes');
		let result = await response.text();
		alert(result.message);
		form.reset();
	}
	else {
		alert('Error');
	}
}