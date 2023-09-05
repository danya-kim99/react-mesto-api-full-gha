import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../utils/AuthApi";


function Register({ openAuthorizationPopup, handleAuthorizationChangeStatus }) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    password: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formValue;
    authApi.register(password, email)
      .then(() => {
        handleAuthorizationChangeStatus(true);
        openAuthorizationPopup();
        navigate('/sign-in', { replace: true })
      })
      .catch((error) => {
        handleAuthorizationChangeStatus(false);
        openAuthorizationPopup();
        console.error(error);
      })
  }

  return (
    <>
      <Header />
      <AuthForm name="sign-up" onSubmit={handleSubmit} onChange={setFormValue} formValue={formValue}></AuthForm>
    </>

  );
}

export default Register;