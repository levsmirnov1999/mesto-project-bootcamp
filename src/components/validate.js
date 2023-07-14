/*export function enableValidation(formSettings) {
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
];*/
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settings.errorClass);
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
};
