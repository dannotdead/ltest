import React from 'react';
import './Input.css';

const Input = ({ label, type, labelClassName, inputClassName, value, wrongLabel, onChange }) => {
  return (
    <div>
      <label className={`${labelClassName}`}>{label}</label>
      <input className={`input ${inputClassName}`} type={type} value={value} onChange={onChange}/>
      <label className='auth-wrong-label'>{wrongLabel}</label>
    </div>
  );
};

export default Input;