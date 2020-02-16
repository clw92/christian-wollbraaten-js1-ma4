/*const firstName = document.querySelector('#firstName');

firstName.addEventListener('keyup', checklength);

function logLength(event) {
	const inputValue = event.target.value;
	const valueLength = inputValue.length;
	console.log(valueLength);

	if (valueLength > 2) {
		console.log('The input has value');
	}
	else {
		console.log('.The input does not have a value');
	}
}
*/

const form = document.querySelector('#contactform');

form.addEventListener('submit', validateForm);

function validateForm(event) {
	event.preventDefault();
	console.log('the form was submitted');

	const firstName = document.querySelector('#firstname');
	const firstNameError = document.querySelector('#firstNameError');
	const firstNameValue = firstName.value;

	if (checkInputLenght(firstNameValue) === true) {
		style.display = 'none';
	}
	else {
		style.display = 'block';
	}
}

function checkInputLenght(value) {
	const trimmedValue = value.trim();

	if (trimmedValue.length > 2) {
		return true;
	}
	else {
		return false;
	}
}
