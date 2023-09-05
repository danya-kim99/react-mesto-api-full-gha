import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({
    isOpen,
    onClose,
    onUpdateUser
}) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);
    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    React.useEffect(() => {
        if (currentUser) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, isOpen]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <div className={`popup popup_type_profile ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container popup__container_profile">
                <h2 className="popup__title">Редактировать профиль</h2>
                <button
                    type="button"
                    className={'popup__close-button popup__close-button_profile'}
                    onClick={onClose}
                />
                <form onSubmit={handleSubmit} className={'popup__form" name="popup__form_type_profile'}>
                    <input
                        id="name-input"
                        name="name"
                        className="popup__input popup__input_type_name"
                        type="text"
                        minLength={2}
                        maxLength={40}
                        placeholder="Имя"
                        required=""
                        value={name}
                        onChange={handleChangeName}
                    />
                    <span className="popup__input-error name-input-error" />
                    <input
                        id="profession-input"
                        name="about"
                        className="popup__input popup__input_type_profession"
                        type="text"
                        minLength={2}
                        maxLength={200}
                        placeholder="Профессия"
                        required=""
                        value={description}
                        onChange={handleChangeDescription}
                    />
                    <span className="profession-input-error popup__input-error" />
                    <button type="submit" disabled="" className="popup__submit" title="Сохранить">
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditProfilePopup;
