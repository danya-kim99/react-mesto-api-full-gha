import React from "react";

function PopupWithForm({
  name,
  title,
  isOpen,
  buttonTitle,
  onClose,
  children,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_profile">
        <h2 className="popup__title">{title}</h2>
        <button
          type="button"
          className={`popup__close-button popup__close-button_${name}`}
          onClick={onClose}
        />
        <form className={`popup__form" name="popup__form_type_${name}`}>
          {children}
          <button type="submit" disabled="" className="popup__submit" title={buttonTitle}>
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
