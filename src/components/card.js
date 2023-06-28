const formElementAddItem = document.querySelector(".popup__form_place_add-item");
const titleInput = document.querySelector(".popup__input_new-item_title");
const linkInput = document.querySelector(".popup__input_new-item_link");
const createButton = document.querySelector(".popup__save-button_place_add-item");
const cardsContainer = document.querySelector(".elements");

import { popupAddItem } from "./modal";
import { popupImage, popupDescription, image } from "./modal";

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

export { formElementAddItem, titleInput, linkInput, createButton, cardsContainer, createCard, addCard, initialCards };