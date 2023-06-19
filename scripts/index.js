const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupCloseButtonEditProfile = document.querySelector(".popup__close-icon_place_edit-profile");
const addButton = document.querySelector(".profile__add-button");
const popupAddItem = document.querySelector(".popup_add-item");
const popupCloseButtonAddItem = document.querySelector(".popup__close-icon_place_add-item");


editButton.addEventListener("click", function () {
  popupEditProfile.classList.add("popup_opened");
});
popupCloseButtonEditProfile.addEventListener("click", function () {
  popupEditProfile.classList.remove("popup_opened");
});

addButton.addEventListener("click", function () {
  popupAddItem.classList.add("popup_opened");
});
popupCloseButtonAddItem.addEventListener("click", function () {
  popupAddItem.classList.remove("popup_opened");
});




const formElementEditProfile = document.querySelector(".popup__form_place_edit-profile");
const nameInput = document.querySelector(".popup__input_profile_name");
const aboutMeInput = document.querySelector(".popup__input_profile_about-me");
const saveButton = document.querySelector(".popup__save-button_place_edit-profile");
const name = document.querySelector(".profile__name");
const aboutMe = document.querySelector(".profile__about-me");

nameInput.value = name.textContent;
aboutMeInput.value = aboutMe.textContent;

function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  aboutMe.textContent = aboutMeInput.value;
  popupEditProfile.classList.remove("popup_opened");
}

formElementEditProfile.addEventListener('submit', handleFormSubmit);






const formElementAddItem = document.querySelector(".popup__form_place_add-item");
const titleInput = document.querySelector(".popup__input_new-item_title");
const linkInput = document.querySelector(".popup__input_new-item_link");
const createButton = document.querySelector(".popup__save-button_place_add-item");
const cardsContainer = document.querySelector(".elements");

const popupImage = document.querySelector(".popup_image");
const popupCloseButtonImage = document.querySelector(".popup__close-icon_place_image");
const image = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popup__description");

popupCloseButtonImage.addEventListener("click", function () {
  popupImage.classList.remove("popup_opened");
});


function createCard(titleInputValue, linkInputValue) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cloneCard = cardTemplate.querySelector(".elements__card").cloneNode(true);

  cloneCard.querySelector(".elements__title").textContent = titleInputValue;
  cloneCard.querySelector(".elements__photo").setAttribute('src', linkInputValue);

  cloneCard.querySelector(".elements__like-button").addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__like-button_active");
  });

  cloneCard.querySelector(".elements__delete-icon").addEventListener("click", function (evt) {
    evt.target.parentNode.remove();
  });

  cloneCard.querySelector(".elements__photo").addEventListener("click", function () {
    popupImage.classList.add("popup_opened");
    popupDescription.textContent = titleInputValue;
    image.setAttribute('src', linkInputValue);
  });

  cardsContainer.prepend(cloneCard);

  return cloneCard;

}
function addCard(evt) {
  evt.preventDefault()
  createCard(titleInput.value, linkInput.value);
  popupAddItem.classList.remove("popup_opened");
}

formElementAddItem.addEventListener('submit', addCard);



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (element) {
  createCard(element.name, element.link);
});