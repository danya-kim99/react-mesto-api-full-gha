import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";
import { useState } from "react";
import { authApi } from "../utils/AuthApi";
import { useNavigate } from "react-router-dom";


function Login({onLogin}) {
  const [formValue, setFormValue] = useState({
    password: '',
    email: ''
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formValue;
    authApi.authorize(password, email)
      .then((res) => {
        localStorage.setItem('token', res.token);
        onLogin(formValue.email);
        setFormValue({username: '', password: ''});
        navigate('/', {replace: true});
      })
      .catch((error) => {
        console.error(error);
      })
    }
    return (
      <>
        <Header />
        <AuthForm name="sign-in" onSubmit={ handleSubmit } onChange={ setFormValue } formValue={ formValue }></AuthForm>
      </>

    );
  
}

export default Login;