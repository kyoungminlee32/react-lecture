import React from 'react';

interface FwAmountFieldProps {
  value: string;
  onClick?: () => void;
  label?: string;
  id?: string;
  unit?: string;
  infoText?: string;
  readOnly?: boolean;
}

export const FwAmountField: React.FC<FwAmountFieldProps> = ({
  value,
  onClick,
  label = '가입금액',
  id = 'joinAmount',
  unit = '원',
  infoText = '',
  readOnly = false,
}) => (
  <div className="field">
    <label htmlFor={id} className="label -readonly -textless">{label}</label>
    <div className="mix">
      <div className="text -won -readonly -unit">
        <input
          type="tel"
          id={id}
          className="right"
          value={value}
          onClick={onClick}
          readOnly={readOnly}
        />
        <div className="won">{unit}</div>
      </div>
      {infoText && <p className="info right">{infoText}</p>}
    </div>
  </div>
);

export default FwAmountField;
