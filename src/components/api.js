import { createCard } from "./card";
import { name, aboutMe, avatar } from "./modal";

const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-10',
  headers: {
    authorization: '08a9e413-f3a2-4906-808f-70fe33826b1a',
    'Content-Type': 'application/json'
  }
}

//загрузка карточек с сервера
export function downloadingSereveCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка');
      }
    })
    .then(function (data) {
      const cards = data;
      console.log(data)
      cards.forEach(function (card) {
        createCard(card);
      })
    })
    .catch(function (error) {
      console.log('Произошла ошибка:', error);
    });
}


//загрузка информации о пользователе с сервера
export let profileId;
export function downloadingServerProfileInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка');
      }
    })
    .then(function (user) {
      profileId = user._id;
      name.textContent = user.name;
      aboutMe.textContent = user.about;
      avatar.src = user.avatar;
    })
    .catch(function (error) {
      console.log('Произошла ошибка:', error);
    });
}


//загрузка изменения информации о пользователе на сервер
export function changeServerProfileInfo(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка');
      }
    })
}


//загрузка новой аватарки на сервер
export function changeServerAvatar(avatarsrc) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarsrc
    })
  });
}

//добавление карточки на сервер
export function addCardOnServer(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка');
      }
    })
}

//удаление карточки
export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then((response) => {
      if (response.ok) {
        console.log('Карточка успешно удалена');
      } else {
        console.log('Ошибка при удалении карточки');
      }
    })
    .catch(function (error) {
      console.log('Произошла ошибка:', error);
    });
}

// Функция для постановки лайка
export function likeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка');
      }
    })
    .catch(function (error) {
      console.log('Произошла ошибка:', error);
    });
}

// Функция для снятия лайка
export function dislikeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка');
      }
    })
    .catch(function (error) {
      console.log('Произошла ошибка:', error);
    });
}