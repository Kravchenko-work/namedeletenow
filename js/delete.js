// Неудавшийся датапикер
form__date.addEventListener('input', function(e){
	let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);	
	e.target.value = x[1] ? (x[2] ? (x[3] ? (x[1] + "  /  " + x[2] + "  /  " + x[3]) : x[1] + "  /  " + x[2]) : x[1]) : "__  / __ / ____";
});