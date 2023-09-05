import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, email, logout }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
    <Header email={email} logout={logout}/>
    <main className="main">
      <section className="profile">
        <button
          className="profile__avatar"
          style={{
            backgroundImage: `url(${
              currentUser ? currentUser.avatar : "Загружаем..."
            })`,
          }}
          onClick={onEditAvatar}
        />
        <div className="profile__info">
          <h1 className="profile__name">
            {currentUser ? currentUser.name : "Вы прекрасны"}
          </h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          />
          <p className="profile__profession">
            {currentUser ? currentUser.about : "Загружаем..."}
          </p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        <div className="spinner"></div>
        <section className="elements">
          <div className="spinner"></div>
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} key={card._id}/>
          ))}
        </section>
      </section>
    </main>
    </>
  );
}

export default Main;
