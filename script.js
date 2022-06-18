const emailInputElem = document.querySelector('#email')
const passwordInputElem = document.querySelector('#password')
const submitElem = document.querySelector('#submit')

const isRequired = value => value
	?undefined
	:'Required';

const isEmail = value => value.includes('@')
	?undefined
	:'Should contain "@"';


const validators = {
	email: [isRequired, isEmail],
	password: [isRequired],
}

const getErrorText = (fieldName, value) => {
	return validators[fieldName]
	.map(valadator => valadator(value))
	.filter(errorText => errorText)
	.join(', ')
}

const onInputChange = event => {
	const inputElemName = event.target.getAttribute('name');
	const errorText = getErrorText(inputElemName, event.target.value)
	const inputErrorElem = document.querySelector(`#${inputElemName}-error`)
	if (errorText) {
		inputErrorElem.textContent = errorText
		inputErrorElem.classList.add('input-error-hide')
	}
	else
		inputErrorElem.classList.remove('input-error-hide')
}

emailInputElem.addEventListener('change', onInputChange)

passwordInputElem.addEventListener('change', onInputChange)

const formElem = document.querySelector('.form')

const onFormSubmit = event => {
	event.preventDefault();
	const formData = [...new FormData(event.target)]
	.reduce((acc, [field, value]) => ({...acc, [field]:value}), {})
	alert(JSON.stringify(formData))
}

formElem.addEventListener('submit', onFormSubmit);

