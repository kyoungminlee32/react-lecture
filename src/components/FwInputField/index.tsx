import React from 'react';

interface InputProps {
    type?: string;
    value?: string;
    onClick?: () => void;
    placeholder?: string;
    label?: string;
    id?: string;
    readOnly?: boolean;
    disabled?: boolean;
}

export const FwInputField = ({
  type = 'text',
  value = '',
  onClick,
  placeholder = '010-0000-0000',
  label = '휴대폰 번호',
  id = 'phone',
  readOnly = false,
  disabled = false,
}: InputProps) => (
  <div className="field">
    <label htmlFor={id} className="label">{label}</label>
    <div className="text -textless">
      <input
        type={type}
        id={id}
        value={value}
        readOnly={readOnly}
        disabled={disabled}
        onClick={onClick}
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default FwInputField;
