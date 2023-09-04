import { apiOptions } from "./constants";
class AuthApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponseData(res, errorText) {
    if (!res.ok) {
      return Promise.reject(`${errorText} Код ошибки: ${res.status}`);
    }
    return res.json();
  }

  register(password, email) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(res => {
        return this._getResponseData(res, 'Не удалось зарегистрироваться.')
      });
  }

  authorize(password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(res => {
        return this._getResponseData(res, 'Не удалось авторизоваться.')
      });
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      credentials: 'include',
    })
      .then(res => {
        return this._getResponseData(res, 'Не удалось авторизоваться.')
      });
  }



}

export const authApi = new AuthApi(apiOptions)