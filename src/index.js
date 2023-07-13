import "./pages/index.css";
import { enableValidation, formSettings } from "./components/validate";
import {
  editButton,
  popupEditProfile,
  popupCloseButtonEditProfile,
  addButton,
  popupAddItem,
  popupCloseButtonAddItem,
  popupImage,
  popupCloseButtonImage,
  image,
  popupDescription,
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
  cardsContainer,
  createCard,
  addCard,
} from "./components/card";
import {
  downloadingSereveCards,
  downloadingServerProfileInfo,
  changeServerProfileInfo,
  changeServerAvatar,
  addCardOnServer,
} from "./components/api";

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
});
popupCloseButtonEditProfile.addEventListener("click", () =>
  closePopup(popupEditProfile)
);

addButton.addEventListener("click", () => openPopup(popupAddItem));
popupCloseButtonAddItem.addEventListener("click", () =>
  closePopup(popupAddItem)
);

popupCloseButtonImage.addEventListener("click", () => closePopup(popupImage));

editAvatarButton.addEventListener("click", () => openPopup(popupEditAvatar));

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
      const inputs = popupEditAvatar.querySelectorAll(".popup__input");
      inputs.forEach((input) => {
        input.value = "";
      });
    })
    .catch((error) => console.log(error))
    .finally(() => {
      saveButtonAvatar.textContent = "Сохранить";
      closePopup(popupEditAvatar);
    });
});

//редактирование профиля и загрузка на сервер
formElementEditProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  saveButton.textContent = "Сохранение…";
  changeServerProfileInfo(nameInput.value, aboutMeInput.value)
    .then((data) => {
      editProfileInfo(data);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      saveButton.textContent = "Сохранить";
      closePopup(popupEditProfile);
    });
});

//добавление карточек на сервер
formElementAddItem.addEventListener("submit", function (event) {
  event.preventDefault();
  createButton.textContent = "Создаём…";
  addCardOnServer(titleInput.value, linkInput.value)
    .then((data) => {
      addCard(data);
      const inputs = popupAddItem.querySelectorAll(".popup__input");
      inputs.forEach((input) => {
        input.value = "";
      });
    })
    .catch((error) => console.log(error))
    .finally(() => {
      createButton.textContent = "Создать";
      closePopup(popupAddItem);
    });
});

//валидация
enableValidation(formSettings);

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
