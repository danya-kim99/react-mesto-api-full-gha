import React from "react";
import { Link } from "react-router-dom";

function AuthForm({name, onSubmit, onChange, formValue}) {
  const handleChange = (e) => {
    const {name, value} = e.target;
    onChange({
      ...formValue,
      [name]: value
    });
  }

  return (
    <div className="authorization">
        <h2 className="authorization__title">{ name === "sign-up" ? "Регистрация" : "Вход" }</h2>
        <form className="authorization__form" onSubmit={onSubmit}>
            <input className="authorization__input authorization__input_type_email" placeholder="Email" required={true} id="email" name="email" type="email" value={formValue.email} onChange={handleChange}></input>
            <input className="authorization__input authorization__input_type_password" placeholder="Пароль" required={true} id="password" name="password" type="password" value={formValue.password} onChange={handleChange}></input>
            <button className="authorization__submit-button">{ name === "sign-up" ? "Зарегистрироваться" : "Войти" }</button>
            {name === "sign-up" && <p className="authorization__auth-redirect">Уже зарегистрированы? <Link className="authorization__auth-redirect" to="/sign-in">Войти</Link></p>}
        </form>
    </div>
  );
}

export default AuthForm;
