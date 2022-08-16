import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import Card from '../components/Card/Card';

import './Auth.css';

const Auth = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [isPassword, setIsPassword] = useState(true)
  const navigate = useNavigate()
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  // const passwordPattern = /[\wа-яА-Я]+/g

  useEffect(() => {
    const checkAuthKey = JSON.parse(localStorage.getItem('auth'))
    if (checkAuthKey) {
      navigate('/hotels')
    }
  }, [])

  const FormTemplate = (
    <>
      <h2>Simple Hotel Check</h2>
      <Input
        label={'Логин'}
        value={login}
        labelClassName={isLogin && 'auth-wrong-input'}
        wrongLabel={isLogin && 'Неправильный email адрес'}
        onChange={(event) => handleLoginInput(event)}
      />
      <Input
        label={'Пароль'}
        value={password}
        labelClassName={isPassword && 'auth-wrong-input'}
        wrongLabel={isPassword && 'Длина пароля 8 и более символов'}
        onChange={(event) => handlePasswordInput(event)}
      />
      <Button name={'Войти'} onClick={(event) => navigateToHotels(event)} />
    </>
  )

  const handleLoginInput = (event) => {
    setLogin(event.target.value)
    setIsLogin(() => checkLogin(event.target.value))
  }

  const handlePasswordInput = (event) => {
    setPassword(event.target.value)
    setIsPassword(() => checkPassword(event.target.value))
  }

  const navigateToHotels = (event) => {
    event.preventDefault()
    if (!isLogin && !isPassword) {
      navigate('/hotels')
      localStorage.setItem('auth', 'true')
    }
  }

  const checkLogin = (value) => {
    return !emailPattern.test(value)
  }

  const checkPassword = (value) => {
    return value.length < 8
  }

  return (
    <div className='auth'>
      <div className='blur' />
      <Card
        template={
          <Form template={FormTemplate} className='auth-form' />
        }
      />
    </div>
  );
};

export default Auth;