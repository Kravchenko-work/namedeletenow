const datePicker = document.querySelector('.date-picker');

const pickerDays__pick = document.querySelector('.picker-days__pick');
const pickerMonths__pick = document.querySelector('.picker-months__pick');
const pickerYears__pick = document.querySelector('.picker-years__pick');

const pickerDays__up = document.querySelector('.picker-days__up');
const pickerDays__down = document.querySelector('.picker-days__down');

const pickerMonths__up = document.querySelector('.picker-months__up');
const pickerMonths__down = document.querySelector('.picker-months__down');

const pickerYears__up = document.querySelector('.picker-years__up');
const pickerYears__down = document.querySelector('.picker-years__down');

form__date = document.querySelector('.form__date');

let day = 1;
let month = 1;
let year = 2020;

// EVENTS LISTENERS
datePicker.addEventListener('click', pickArrow);
datePicker.addEventListener('change', changeValue);
datePicker.addEventListener('wheel', scrollWheel);
datePicker.addEventListener('submit', function(e){
	e.preventDefault();
});

function pickArrow(e) {
	if (e.target == pickerDays__up){
		if (day == 31) return;
		day++;
		pickerDays__pick.value = day;
	}
	if (e.target == pickerDays__down){
		if (day == 1) return;
		day--;
		pickerDays__pick.value = day;
	}
	if (e.target == pickerMonths__up){
		if (month == 12) return;
		month++;
		pickerMonths__pick.value = month;
	}
	if (e.target == pickerMonths__down){
		if (month == 1) return;
		month--;
		pickerMonths__pick.value = month;
	}
	if (e.target == pickerYears__up){
		year++;
		pickerYears__pick.value = year;
	}
	if (e.target == pickerYears__down){
		year--;
		pickerYears__pick.value = year;
	}
	setInInput();
}

function changeValue(e) {
	if (e.target == pickerDays__pick){
		if (e.target.value > 31 || e.target.value < 0){
			e.target.value = day;
			return;
		}
		day = e.target.value;

	}
	if (e.target == pickerMonths__pick){
		if (e.target.value > 12 || e.target.value < 0){
			e.target.value = month;
			return;
		}
		month = e.target.value;
	}
	if (e.target == pickerYears__pick){
		if (e.target.value > 2022 || e.target.value < 0){
			e.target.value = year;
			return;
		}
		year = e.target.value;
	}
	setInInput();		
}

function scrollWheel(e){
	e.preventDefault();
	if (e.target == pickerDays__pick) {
		day = +e.target.value + (Math.trunc(e.deltaY / 100)) * -1;
		if (day < 1 || day > 31){
			day = e.target.value;
			return;
		}
		e.target.value = day;
	}
	if (e.target == pickerMonths__pick) {
		month = +e.target.value + (Math.trunc(e.deltaY / 100)) * -1;
		if (month < 1 || month > 12){
			month = e.target.value;
			return;
		}
		e.target.value = month;
	}
	if (e.target == pickerYears__pick) {
		year = +e.target.value + (Math.trunc(e.deltaY / 100)) * -1;
		if (year < 1 || year > 2021){
			year = e.target.value;
			return;
		}
		e.target.value = year;
	}
	setInInput();
}

// HEPLING FUNCTIONS
function setInInput() {
	form__date.innerHTML = `${day}  /  ${month}  /  ${year}`;
}