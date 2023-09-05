import React, { useRef } from "react";

function EditAvatarPopup({
    isOpen,
    onClose,
    onUpdateAvatar
}) {
    const avatarRef = useRef();
    
    function handleChangeAvatar(e) {
        avatarRef.current.value = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            link: avatarRef.current
        });
    }

    React.useEffect(() => {
        avatarRef.current.value = ''
    }, [isOpen]);

    return (
        <div className={`popup popup_type_avatar ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container popup__container_avatar">
                <h2 className="popup__title">Обновить аватар</h2>
                <button
                    type="button"
                    className={'popup__close-button popup__close-button_avatar'}
                    onClick={onClose}
                />
                <form onSubmit={handleSubmit} className={'popup__form" name="popup__form_type_avatar'}>
                    <input
                        ref={avatarRef}
                        id="avatar-link-input"
                        name="link"
                        className="popup__input popup__input_type_link"
                        type="url"
                        placeholder="Ссылка на изображение"
                        required=""
                        onChange={handleChangeAvatar}
                    />
                    <span className="popup__input-error avatar-link-input-error" />
                    <button type="submit" disabled="" className="popup__submit" title="Сохранить">
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditAvatarPopup;
