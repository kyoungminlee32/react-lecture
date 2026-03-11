import { ChangeEvent } from 'react';

interface FwCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  size?: 'sm';
  customClass?: string;
}

export const FwCheckbox = ({ id, checked, onChange, label, size, customClass }: FwCheckboxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  const className = ['checkbox', size ? `-${size}` : '', customClass].filter(Boolean).join(' ');

  return (
    <div className={className}>
      <input type="checkbox" id={id} checked={checked} onChange={handleChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FwCheckbox;
