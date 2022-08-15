import React from 'react';
import './Input.css';

const Input = ({ label, type, labelClassName, inputClassName }) => {
  return (
    <div>
      <label className={`${labelClassName}`}>{label}</label>
      <input className={`input ${inputClassName}`} type={type} />
    </div>
  );
};

export default Input;