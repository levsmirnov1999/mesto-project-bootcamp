export function handleFormValidation(formElement, buttonElement) {
  const formFields = formElement.querySelectorAll(".form__field");
  
  formElement.addEventListener('input', function () {
    let hasInvalidInput = false;
    
    formFields.forEach(function (field) {
      const input = field.querySelector(".popup__input");
      const error = field.querySelector(".popup__input-error");
      
      if (!input.validity.valid) {
        error.textContent = input.validationMessage;
        hasInvalidInput = true;
      } else {
        error.textContent = "";
      }
    });
    
    if (hasInvalidInput) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add("popup__save-button_disabled");
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove("popup__save-button_disabled");
    }
  });
}