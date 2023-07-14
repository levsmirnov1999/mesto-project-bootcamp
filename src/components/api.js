const config = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-10",
  headers: {
    authorization: "08a9e413-f3a2-4906-808f-70fe33826b1a",
    "Content-Type": "application/json",
  },
};

const checkResponse = (resp) => {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error("Ошибка");
  }
};

//загрузка карточек с сервера
export function downloadingSereveCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((response) => checkResponse(response));
}

//загрузка информации о пользователе с сервера
export function downloadingServerProfileInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((response) => checkResponse(response));
}

//загрузка изменения информации о пользователе на сервер
export function changeServerProfileInfo(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name,
      about,
    }),
  }).then((response) => checkResponse(response));
}

//загрузка новой аватарки на сервер
export function changeServerAvatar(avatarsrc) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarsrc,
    }),
  }).then((response) => checkResponse(response));
}

//добавление карточки на сервер
export function addCardOnServer(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then((response) => checkResponse(response));
}

//удаление карточки
export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((response) => checkResponse(response));
}

// Функция для постановки лайка
export function likeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((response) => checkResponse(response));
}

// Функция для снятия лайка
export function dislikeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((response) => checkResponse(response));
}
