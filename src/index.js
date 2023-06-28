import './pages/index.css';
import { handleFormValidation } from './components/validate';
import { editButton, popupEditProfile, popupCloseButtonEditProfile, addButton, popupAddItem, popupCloseButtonAddItem, popupImage, popupCloseButtonImage, image, popupDescription, popups, openPopup, closePopup, formElementEditProfile, nameInput, aboutMeInput, saveButton, name, aboutMe, handleFormSubmit, closePopupOnOverlayClick } from './components/modal';
import { formElementAddItem, titleInput, linkInput, createButton, cardsContainer, createCard, addCard, initialCards } from './components/card'

//закрытие попапа на оверлей
popupEditProfile.addEventListener('click', (event) => {
  closePopupOnOverlayClick(popupEditProfile, event);
});

popupAddItem.addEventListener('click', (event) => {
  closePopupOnOverlayClick(popupAddItem, event);
});

popupImage.addEventListener('click', (event) => {
  closePopupOnOverlayClick(popupImage, event);
});

//открытие и закрытие попапов на кнопки
editButton.addEventListener("click", () => openPopup(popupEditProfile));
popupCloseButtonEditProfile.addEventListener("click", () => closePopup(popupEditProfile));

addButton.addEventListener("click", () => openPopup(popupAddItem));
popupCloseButtonAddItem.addEventListener("click", () => closePopup(popupAddItem));

popupCloseButtonImage.addEventListener("click", () => closePopup(popupImage));

//зыкрытие попапов на эскейп
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === "Escape") {
    popups.forEach(popup => popup.classList.remove("popup_opened"));
  }
});




//работа попапа изменения профиля
nameInput.value = name.textContent;
aboutMeInput.value = aboutMe.textContent;

formElementEditProfile.addEventListener('submit', handleFormSubmit);


//добавление карточек
formElementAddItem.addEventListener('submit', addCard);
formElementAddItem.addEventListener('submit', function () {
  formElementAddItem.reset();
});

//добавление карточек из массива
initialCards.forEach(function (element) {
  createCard(element.name, element.link);
});


//валидация
handleFormValidation(formElementEditProfile, saveButton);
handleFormValidation(formElementAddItem, createButton);


