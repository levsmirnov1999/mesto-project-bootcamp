const formElementAddItem = document.querySelector(".popup__form_place_add-item");
const titleInput = document.querySelector(".popup__input_new-item_title");
const linkInput = document.querySelector(".popup__input_new-item_link");
const createButton = document.querySelector(".popup__save-button_place_add-item");
const cardsContainer = document.querySelector(".elements");

import { closePopup, openPopup, popupAddItem } from "./modal";
import { popupImage, popupDescription, image } from "./modal";
import { deleteCard, profileId, likeCard, dislikeCard } from "./api";

function createCard(data) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cloneCard = cardTemplate.querySelector(".elements__card").cloneNode(true);

  cloneCard.querySelector(".elements__title").textContent = data.name;
  cloneCard.querySelector(".elements__photo").setAttribute('src', data.link);

  const likeButton = cloneCard.querySelector(".elements__like-button");
  const likeCounter = cloneCard.querySelector(".elements__like-counter");

  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__like-button_active");

    // Отправляем запрос на сервер для постановки или снятия лайка
    if (evt.target.classList.contains("elements__like-button_active")) {
      likeCard(data._id).then(function (data) {
        updateLikeCounter(data.likes.length); // Обновляем счетчик лайков
      })
    } else {
      dislikeCard(data._id).then(function (data) {
        updateLikeCounter(data.likes.length); // Обновляем счетчик лайков
      })
    }
  });
  for (const like of data.likes) {
    if (like._id === profileId) {
      likeButton.classList.toggle("elements__like-button_active");
    }
  }
  if (data.owner._id === profileId) {
    cloneCard.querySelector(".elements__delete-icon").classList.add("elements__delete-icon_hidden")
    cloneCard.querySelector(".elements__delete-icon").addEventListener("click", function (evt) {
      deleteCard(data._id).then(() => evt.target.parentNode.remove())
    })
  }

  cloneCard.querySelector(".elements__photo").addEventListener("click", function () {
    openPopup(popupImage)
    popupDescription.textContent = data.name;
    image.setAttribute('src', data.link);
  });

  // Функция для обновления счетчика лайков
  function updateLikeCounter(count) {
    likeCounter.textContent = count;
  }

  // Инициализируем счетчик лайков
  updateLikeCounter(data.likes.length);

  cardsContainer.prepend(cloneCard);

  return cloneCard;

}
function addCard(data) {
  createCard(data);
  
}


export { formElementAddItem, titleInput, linkInput, createButton, cardsContainer, createCard, addCard };

