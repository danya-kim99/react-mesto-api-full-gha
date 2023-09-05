import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const user = React.useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(card);
  }

  const handleLikeClick = () => {
    onCardLike(card);
  }

  const handleDeleteClick = () => {
    onCardDelete(card);
  }
  
  const isOwn = card.owner._id === user._id;
  const isLiked = card.likes.some(i => i._id === user._id);
  const cardLikeButtonClassName = ( 
    `element__like ${isLiked && 'element__like_pressed'}` 
  );; 

  return (
    <div className="element" key={card._id}>
      <img
        className="element__image"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleCardClick}
      />
      <h2 className="element__title">{card.name}</h2>
      {isOwn && <button className='element__trash' onClick={handleDeleteClick} />}
      <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
      <span className="element__number-of-likes">{card.likes.length}</span>
    </div>
  );
}

export default Card;
