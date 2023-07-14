import "./pages/index.css";
import { enableValidation } from "./components/validate";
import {
  editButton,
  popupEditProfile,
  popupCloseButtonEditProfile,
  addButton,
  popupAddItem,
  popupCloseButtonAddItem,
  popupImage,
  popupCloseButtonImage,
  openPopup,
  closePopup,
  formElementEditProfile,
  nameInput,
  aboutMeInput,
  saveButton,
  name,
  aboutMe,
  avatar,
  editProfileInfo,
  closePopupOnOverlayClick,
  popupEditAvatar,
  popupCloseButtonEditAvatar,
  formElementEditAvatar,
  avatarInput,
  saveButtonAvatar,
  editAvatarButton,
  editAvatarImage,
} from "./components/modal";
import {
  formElementAddItem,
  titleInput,
  linkInput,
  createButton,
  addCard,
} from "./components/card";
import {
  downloadingSereveCards,
  downloadingServerProfileInfo,
  changeServerProfileInfo,
  changeServerAvatar,
  addCardOnServer,
} from "./components/api";

function inactiveButton(button) {
  button.classList.add("popup__save-button_disabled");
  button.setAttribute("disabled", true);
}

//закрытие попапа на оверлей
popupEditProfile.addEventListener("click", (event) => {
  closePopupOnOverlayClick(popupEditProfile, event);
});

popupAddItem.addEventListener("click", (event) => {
  closePopupOnOverlayClick(popupAddItem, event);
});

popupImage.addEventListener("click", (event) => {
  closePopupOnOverlayClick(popupImage, event);
});

popupEditAvatar.addEventListener("click", (event) => {
  closePopupOnOverlayClick(popupEditAvatar, event);
});

//открытие и закрытие попапов на кнопки
editButton.addEventListener("click", () => {
  nameInput.value = name.textContent;
  aboutMeInput.value = aboutMe.textContent;
  openPopup(popupEditProfile);
  inactiveButton(saveButton);
});
popupCloseButtonEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);

addButton.addEventListener("click", () => {
  openPopup(popupAddItem);
  inactiveButton(createButton);
});
popupCloseButtonAddItem.addEventListener("click", () =>
  closePopup(popupAddItem)
);

popupCloseButtonImage.addEventListener("click", () => closePopup(popupImage));

editAvatarButton.addEventListener("click", () => {
  openPopup(popupEditAvatar);
  inactiveButton(saveButtonAvatar);
});

popupCloseButtonEditAvatar.addEventListener("click", () =>
  closePopup(popupEditAvatar)
);

//изменение аватара и отправка на сервер
formElementEditAvatar.addEventListener("submit", function (event) {
  event.preventDefault();
  saveButtonAvatar.textContent = "Сохранение…";
  changeServerAvatar(avatarInput.value)
    .then((avatar) => {
      editAvatarImage(avatar);
      formElementEditAvatar.reset();
      closePopup(popupEditAvatar);
    })
    .catch((error) => console.log(error))
    .finally(() => (saveButtonAvatar.textContent = "Сохранить"));
});

//редактирование профиля и загрузка на сервер
formElementEditProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  saveButton.textContent = "Сохранение…";
  changeServerProfileInfo(nameInput.value, aboutMeInput.value)
    .then((data) => {
      editProfileInfo(data);
      closePopup(popupEditProfile);
    })
    .catch((error) => console.log(error))
    .finally(() => (saveButton.textContent = "Сохранить"));
});

//добавление карточек на сервер
formElementAddItem.addEventListener("submit", function (event) {
  event.preventDefault();
  createButton.textContent = "Создаём…";
  addCardOnServer(titleInput.value, linkInput.value)
    .then((data) => {
      addCard(data);
      formElementAddItem.reset();
      closePopup(popupAddItem);
    })
    .catch((error) => console.log(error))
    .finally(() => (createButton.textContent = "Создать"));
});

//валидация
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
});
// загрузка карточек и профиля с сервера
export let profileId;
const fetchDataPromisAll = async () => {
  try {
    const [profile, cards] = await Promise.all([
      downloadingServerProfileInfo(),
      downloadingSereveCards(),
    ]);

    profileId = profile._id;
    name.textContent = profile.name;
    aboutMe.textContent = profile.about;
    avatar.src = profile.avatar;

    cards.forEach(function (card) {
      addCard(card);
    });
  } catch (error) {
    alert("error");
  }
};

fetchDataPromisAll();
