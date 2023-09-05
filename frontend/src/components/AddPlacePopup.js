import React from "react";

function AddPlacePopup({
    isOpen,
    onClose,
    onAddCard
}) {
    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');
    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }
    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onAddCard({
            name: title,
            link: link,
        });
    }

    React.useEffect(() => {
        setTitle('');
        setLink('');
    }, [isOpen]);

    return (
        <div className={`popup popup_type_place ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container popup__container_place">
                <h2 className="popup__title">Новое место</h2>
                <button
                    type="button"
                    className={'popup__close-button popup__close-button_place'}
                    onClick={onClose}
                />
                <form onSubmit={handleSubmit} className={'popup__form" name="popup__form_type_place'}>
                    <input
                        id="title-input"
                        name="name"
                        className="popup__input popup__input_type_title"
                        type="text"
                        minLength={2}
                        maxLength={30}
                        placeholder="Название места"
                        required=""
                        value={title}
                        onChange={handleChangeTitle}
                    />
                    <span className="popup__input-error title-input-error" />
                    <input
                        id="link-input"
                        name="link"
                        className="popup__input popup__input_type_link"
                        type="url"
                        placeholder="Ссылка на изображение"
                        required=""
                        value={link}
                        onChange={handleChangeLink}
                    />
                    <span className="popup__input-error link-input-error" />
                    <button type="submit" disabled="" className="popup__submit" title="Cоздать">
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddPlacePopup;
