
export function enableValidation({
  formSelector ,
  inputSelector ,
  submitButtonSelector ,
  inactiveButtonClass ,
  inputErrorClass ,
  errorClass 
}){
  const form = document.querySelector(formSelector)
  const inputs = form.querySelectorAll(inputSelector)
  const error = form.querySelector(errorClass)
  const submitButton = form.querySelector(submitButtonSelector)

  function toggleButtonState() {
    const isValid = form.checkValidity();
    submitButton.disabled = !isValid;
    submitButton.classList.toggle(inactiveButtonClass, !isValid);
  }
  function showInputError(input) {
    const selector = (`${errorClass}-${input.name}`)
    const errorElement = form.querySelector(selector);
    errorElement.textContent = input.validationMessage;
    input.classList.add(inputErrorClass);
  }
  function hideInputError(input) {
    const errorElement = form.querySelector(`${errorClass}-${input.name}`);
    errorElement.textContent = '';
    input.classList.remove(inputErrorClass);
  }
  function handleInput(event) {
    const input = event.target;
    if (input.validity.valid) {
      hideInputError(input);
    } else {
      showInputError(input);
    }
    toggleButtonState();
  }
  inputs.forEach((input) => {
    input.addEventListener('input', handleInput);
  });
}