import React from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import './Auth.css';

const Auth = () => {
  return (
    <div className='auth'>
      <div className='blur' />
      <form className='auth-form'>
        <div className='auth-form-login'>
          <label>Логин</label>
          <Input />
        </div>
        <div className='auth-form-password'>
          <label>Пароль</label>
          <Input />
        </div>
        <Button name={'Войти'} />
      </form>
    </div>
  );
};

export default Auth;