import React from "react";

function AuthorizationPopup({isOpen, onClose, authStatus}) {
  return (
    <div className={`popup popup_type_authorization ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_authorization">
        <div className={`popup__authorization-status ${authStatus ? "popup__authorization-status_success" : "popup__authorization-status_failed"}`}/>
        <h2 className="popup__title_authorization">{authStatus ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
        <button
          type="button"
          className="popup__close-button popup__close-button_authorization"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default AuthorizationPopup;