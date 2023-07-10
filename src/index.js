import './pages/index.css';
import { enableValidation } from './components/validate';
import { editButton, popupEditProfile, popupCloseButtonEditProfile, addButton, popupAddItem, popupCloseButtonAddItem, popupImage, popupCloseButtonImage, image, popupDescription, openPopup, closePopup, formElementEditProfile, nameInput, aboutMeInput, saveButton, name, aboutMe, avatar, editProfileInfo, closePopupOnOverlayClick, popupEditAvatar, popupCloseButtonEditAvatar, formElementEditAvatar, avatarInput, saveButtonAvatar, editAvatarButton, editAvatarImage } from './components/modal';
import { formElementAddItem, titleInput, linkInput, createButton, cardsContainer, createCard, addCard } from './components/card'
import { downloadingSereveCards, downloadingServerProfileInfo, changeServerProfileInfo, changeServerAvatar, addCardOnServer } from './components/api';

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

popupEditAvatar.addEventListener('click', (event) => {
  closePopupOnOverlayClick(popupEditAvatar, event);
});



//открытие и закрытие попапов на кнопки
editButton.addEventListener("click", () => {
  nameInput.value = name.textContent;
  aboutMeInput.value = aboutMe.textContent;
  openPopup(popupEditProfile)
});
popupCloseButtonEditProfile.addEventListener("click", () => closePopup(popupEditProfile));

addButton.addEventListener("click", () => openPopup(popupAddItem));
popupCloseButtonAddItem.addEventListener("click", () => closePopup(popupAddItem));

popupCloseButtonImage.addEventListener("click", () => closePopup(popupImage));

editAvatarButton.addEventListener("click", () => openPopup(popupEditAvatar));
popupCloseButtonEditAvatar.addEventListener("click", () => closePopup(popupEditAvatar));



//изменение аватара и отправка на сервер
formElementEditAvatar.addEventListener('submit', function (event) {
  event.preventDefault()
  saveButtonAvatar.textContent = "Сохранение…"
  changeServerAvatar(avatarInput.value).then( (avatar) => {
    editAvatarImage(avatar)
  })
  setTimeout(function() {
    createButton.textContent = "Сохранить";
    closePopup(popupEditAvatar)
  }, 800);
});

//редактирование профиля и загрузка на сервер
formElementEditProfile.addEventListener('submit', function (event) {
  event.preventDefault()
  saveButton.textContent = "Сохранение"
  changeServerProfileInfo(nameInput.value, aboutMeInput.value).then( (data) => {
    editProfileInfo(data);
  })
  setTimeout(function() {
    createButton.textContent = "Сохранить";
    closePopup(popupEditProfile)
  }, 800);
});

//добавление карточек на сервер
formElementAddItem.addEventListener('submit', function (event) {
  event.preventDefault()
  createButton.textContent = 'Создаем…';
  addCardOnServer(titleInput.value, linkInput.value).then( (data) => {
    addCard(data);
  })
  setTimeout(function() {
    createButton.textContent = "Создать";
    closePopup(popupAddItem)
  }, 800);
  
});

formElementAddItem.addEventListener('submit', function () {
  formElementAddItem.reset();
});


//валидация
enableValidation({ formSelector: '.popup__form_place_edit-profile', inputSelector: '.popup__input', errorClass: '.popup__input-error', submitButtonSelector: '.popup__save-button', inactiveButtonClass: 'popup__save-button_disabled', inputErrorClass: 'popup__input_invalid' });
enableValidation({ formSelector: '.popup__form_place_add-item', inputSelector: '.popup__input', errorClass: '.popup__input-error', submitButtonSelector: '.popup__save-button', inactiveButtonClass: 'popup__save-button_disabled', inputErrorClass: 'popup__input_invalid' });
enableValidation({ formSelector: '.popup__form_place_edit-avatar', inputSelector: '.popup__input', errorClass: '.popup__input-error', submitButtonSelector: '.popup__save-button', inactiveButtonClass: 'popup__save-button_disabled', inputErrorClass: 'popup__input_invalid' });



//загрузка информации о пользователе с сервера
downloadingServerProfileInfo();



//загрузка карточек с сервера
downloadingSereveCards();


