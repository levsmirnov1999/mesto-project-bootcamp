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
const avatar = document.querySelector(".profile__avatar");
const editAvatarButton = document.querySelector(".profile__avatar-edit");
const popupEditAvatar = document.querySelector('.popup_edit-avatar');
const popupCloseButtonEditAvatar = document.querySelector('.popup__close-icon_place_edit-avatar');
const formElementEditAvatar = document.querySelector('.popup__form_place_edit-avatar');
const avatarInput = document.querySelector('.popup__input_edit-avatar_link');
const saveButtonAvatar = document.querySelector('.popup__save-button_place_edit-avatar');


function editAvatarImage() {
  avatar.setAttribute('src', avatarInput.value);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  const closePopupEsc = (event) => {
    const key = event.key;
    if (key === "Escape") {
      closePopup(popup)
      document.removeEventListener('keydown', closePopupEsc)
    }
  }
  document.addEventListener('keydown', closePopupEsc)
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  const inputs = popup.querySelectorAll('.popup__input');
  inputs.forEach(input => {
    input.value = '';
  })
}
function editProfileInfo() {
  name.textContent = nameInput.value;
  aboutMe.textContent = aboutMeInput.value;
};
function closePopupOnOverlayClick(popup, event) {
  if (event.target.classList.contains('popup')) {
    closePopup(popup)
  }
}

export { editButton, editAvatarButton, editAvatarImage, popupEditAvatar, popupCloseButtonEditAvatar, formElementEditAvatar, avatarInput, saveButtonAvatar, popupEditProfile, popupCloseButtonEditProfile, addButton, popupAddItem, popupCloseButtonAddItem, popupImage, popupCloseButtonImage, image, popupDescription, openPopup, closePopup, formElementEditProfile, nameInput, aboutMeInput, saveButton, name, aboutMe, avatar, editProfileInfo, closePopupOnOverlayClick };