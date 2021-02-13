import React from 'react';

const Input = ({ label, type, input, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <input type={type} value={input} onChange={onChange} />
      </label>
    </div>
  );
};

export default Input;
