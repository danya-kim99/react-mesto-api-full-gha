import React from "react";
import logoImage from "../images/header-logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";


function Header({email, logout}) {
  const navigate = useNavigate();
  const location = useLocation();
  function signOut(){
    localStorage.removeItem('token');
    logout();
    navigate('/sign-in', { replace: true })
  }
  return (
    <header className={"header header_login"}>
      <img className="header__logo" src={logoImage} alt="Лого сайта" />
      { location.pathname === 'sign-up' && <Link className={"header__link"} to="/sign-in">Войти</Link> }
      { location.pathname === 'sign-in' && <Link className={"header__link"} to="/sign-up">Регистрация</Link> }
      { location.pathname === '/' && <div style={{display: "flex"}}>
        <p className="header__user-email">{email}</p>
        && <a className={"header__link"} onClick={signOut}>Выйти</a>
      </div> }
      </header>
  );
}

export default Header;
