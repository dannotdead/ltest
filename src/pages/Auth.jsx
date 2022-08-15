import React from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import Card from '../components/Card/Card';

import './Auth.css';

const Auth = () => {
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

const FormTemplate = (
  <>
    <h2>Simple Hotel Check</h2>
    <Input label={'Логин'} />
    <Input label={'Пароль'} />
    <Button name={'Войти'} onClick={() => console.log('press')}/>
  </>
)

export default Auth;