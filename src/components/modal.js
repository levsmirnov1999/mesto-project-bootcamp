const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupCloseButtonEditProfile = document.querySelector(".popup__close-icon_place_edit-profile");
const addButton = document.querySelector(".profile__add-button");
const popupAddItem = document.querySelector(".popup_add-item");
const popupCloseButtonAddItem = document.querySelector(".popup__close-icon_place_add-item");
const popupImage = document.querySelector(".popup_image");
const popupCloseButtonImage = document.querySelector(".popup__close-icon_place_image");
const image = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popup__description");
const formElementEditProfile = document.querySelector(".popup__form_place_edit-profile");
const nameInput = document.querySelector(".popup__input_profile_name");
const aboutMeInput = document.querySelector(".popup__input_profile_about-me");
const saveButton = document.querySelector(".popup__save-button_place_edit-profile");
const name = document.querySelector(".profile__name");
const aboutMe = document.querySelector(".profile__about-me");
const popups = [popupEditProfile, popupAddItem, popupImage];

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  aboutMe.textContent = aboutMeInput.value;
  popupEditProfile.classList.remove("popup_opened");
};
function closePopupOnOverlayClick(popup, event) {
  if (event.target.classList.contains('popup')) {
    popup.classList.remove("popup_opened");
  }
}

export { editButton, popupEditProfile, popupCloseButtonEditProfile, addButton, popupAddItem, popupCloseButtonAddItem, popupImage, popupCloseButtonImage, image, popupDescription, popups, openPopup, closePopup, formElementEditProfile, nameInput, aboutMeInput, saveButton, name, aboutMe, handleFormSubmit, closePopupOnOverlayClick };