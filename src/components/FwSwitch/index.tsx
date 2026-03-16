import { ChangeEvent } from 'react';

interface FwSwitchProps {
  id?: string;
  type?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const FwSwitch = ({
  id,
  type = 'checkbox',
  checked,
  onChange,
  label = '',
  disabled = false
  }: FwSwitchProps) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };    

  return (
    <div className="switch">
      <input
        id={id}
        type={type}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label htmlFor={id}>
        <span className="hide">{label}</span>
      </label>
    </div>
  );
};

export default FwSwitch;