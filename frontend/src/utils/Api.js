import { apiOptions } from "./constants";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._token = options.token
  }

  _getResponseData(res, errorText) {
    if (!res.ok) {
      return Promise.reject(`${errorText} Код ошибки: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      })
      .then(res => {
        return this._getResponseData(res, 'Не удалось загрузить информацию.')
      });
  }

  postCard(values) {
    return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          link: values.link
        })
      })
      .then(res => {
        return this._getResponseData(res, 'Не удалось добавить карточку.')
      });
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      })
      .then(res => {
        return this._getResponseData(res, 'Не удалось удалить карточку.')
      });
  }

  putLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: {
          authorization: this._token
        }
      })
      .then(res => {
        return this._getResponseData(res, 'Не удалось поставить лайк.')
      });
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      })
      .then(res => {
        return this._getResponseData(res, 'Не удалось удалить лайк.')
      });
  }

  changeLikeCardStatus(id, isLiked) {
    return isLiked
    ? this.deleteLike(id)
    : this.putLike(id)
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          authorization: this._token
        }
      })
      .then(res => {
        return this._getResponseData(res, 'Не удалось получить информацию о профиле.')
      });
  }

  patchProfileInfo(values) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          about: values.about
        })
      })
      .then(res => {
        return this._getResponseData(res, 'Не удалось обновить информацию профиля.')
      });
  }

  patchProfileAvatar(values) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: values.link
        })
      })
      .then(res => {
        return this._getResponseData(res, 'Не удалось обновить аватар.')
      });
  }
}

export const api = new Api(apiOptions)
