import React from "react";

function ImagePopup({card, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_image">
        <img className="popup__image" src={card? card.link : "Загружаем..."}/>
        <h2 className="popup__title popup__title_image">{card? card.name : "Загружаем..."}</h2>
        <button
          type="button"
          className="popup__close-button popup__close-button_image"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
