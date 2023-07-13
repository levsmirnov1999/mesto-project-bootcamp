const formElementAddItem = document.querySelector(
  ".popup__form_place_add-item"
);
const titleInput = document.querySelector(".popup__input_new-item_title");
const linkInput = document.querySelector(".popup__input_new-item_link");
const createButton = document.querySelector(
  ".popup__save-button_place_add-item"
);
const cardsContainer = document.querySelector(".elements");

import { closePopup, openPopup, popupAddItem } from "./modal";
import { popupImage, popupDescription, image } from "./modal";
import { deleteCard, likeCard, dislikeCard } from "./api";
import { profileId } from "../index";

function createCard(data) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cloneCard = cardTemplate
    .querySelector(".elements__card")
    .cloneNode(true);
  const cardPhoto = cloneCard.querySelector(".elements__photo");
  cloneCard.querySelector(".elements__title").textContent = data.name;
  cardPhoto.setAttribute("src", data.link);
  cardPhoto.setAttribute("alt", data.name);

  const likeButton = cloneCard.querySelector(".elements__like-button");
  const likeCounter = cloneCard.querySelector(".elements__like-counter");
  const deleteIcon = cloneCard.querySelector(".elements__delete-icon");

  likeButton.addEventListener("click", function (evt) {
    //evt.target.classList.toggle("elements__like-button_active");
    // Отправляем запрос на сервер для постановки или снятия лайка
    if (!evt.target.classList.contains("elements__like-button_active")) {
      likeCard(data._id)
        .then(function (data) {
          updateLikeCounter(data.likes.length); // Обновляем счетчик лайков
          evt.target.classList.toggle("elements__like-button_active");
        })
        .catch((error) => console.log(error));
    } else {
      dislikeCard(data._id)
        .then(function (data) {
          updateLikeCounter(data.likes.length); // Обновляем счетчик лайков
          evt.target.classList.toggle("elements__like-button_active");
        })
        .catch((error) => console.log(error));
    }
  });
  for (const like of data.likes) {
    if (like._id === profileId) {
      likeButton.classList.toggle("elements__like-button_active");
    }
  }
  if (data.owner._id === profileId) {
    deleteIcon.classList.add("elements__delete-icon_hidden");
    deleteIcon.addEventListener("click", function (evt) {
      deleteCard(data._id)
        .then(() => evt.target.closest(".elements__card").remove())
        .catch((error) => console.log(error));
    });
  }

  cardPhoto.addEventListener("click", function () {
    openPopup(popupImage);
    popupDescription.textContent = data.name;
    image.setAttribute("src", data.link);
  });

  // Функция для обновления счетчика лайков
  function updateLikeCounter(count) {
    likeCounter.textContent = count;
  }

  // Инициализируем счетчик лайков
  updateLikeCounter(data.likes.length);
  return cloneCard;
}
function addCard(data) {
  cardsContainer.prepend(createCard(data));
}

export {
  formElementAddItem,
  titleInput,
  linkInput,
  createButton,
  cardsContainer,
  createCard,
  addCard,
};
