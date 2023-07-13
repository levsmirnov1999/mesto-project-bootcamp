export function enableValidation(formSettings) {
  formSettings.forEach((settings) => {
    const form = document.querySelector(settings.formSelector);
    const inputs = form.querySelectorAll(settings.inputSelector);
    const error = form.querySelector(settings.errorClass);
    const submitButton = form.querySelector(settings.submitButtonSelector);

    function toggleButtonState() {
      const isValid = form.checkValidity();
      submitButton.disabled = !isValid;
      submitButton.classList.toggle(settings.inactiveButtonClass, !isValid);
    }

    function showInputError(input) {
      const selector = `${settings.errorClass}-${input.name}`;
      const errorElement = form.querySelector(selector);
      errorElement.textContent = input.validationMessage;
      input.classList.add(settings.inputErrorClass);
    }

    function hideInputError(input) {
      const errorElement = form.querySelector(
        `${settings.errorClass}-${input.name}`
      );
      errorElement.textContent = "";
      input.classList.remove(settings.inputErrorClass);
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
      input.addEventListener("input", handleInput);
    });

    toggleButtonState();
  });
}

export const formSettings = [
  {
    formSelector: ".popup__form_place_edit-profile",
    inputSelector: ".popup__input",
    errorClass: ".popup__input-error",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input_invalid",
  },
  {
    formSelector: ".popup__form_place_add-item",
    inputSelector: ".popup__input",
    errorClass: ".popup__input-error",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input_invalid",
  },
  {
    formSelector: ".popup__form_place_edit-avatar",
    inputSelector: ".popup__input",
    errorClass: ".popup__input-error",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input_invalid",
  },
];
