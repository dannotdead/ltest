import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Input from '../components/Input/Input';
import Form from '../components/Form/Form';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';

import './Hotels.css';

const Hotels = () => {
  return (
    <div className='hotels'>
      <Navbar />
      <div className='hotels-grid'>
        <Card
          className={'hotels-search'}
          template={
            <Form template={FormTemplate}/>
          }
        />
        <Card
          className={'hotels-favourite'}
          template={<div>2</div>}
        />
        <Card
          className={'hotels-list'}
          template={<div>3</div>}
        />
      </div>
    </div>
  );
};

const FormTemplate = (
  <>
    <Input
      label={'Локация'}
      labelClassName='hotels-search-label'
    />
    <Input
      label={'Дата заселения'}
      labelClassName='hotels-search-label'
      type={'date'}
    />
    <Input
      label={'Количество дней'}
      labelClassName='hotels-search-label'
    />
    <Button name={'Найти'} />
  </>
)

export default Hotels;