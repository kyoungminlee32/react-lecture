import { ChangeEvent } from 'react';

interface FwSwitchProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const FwSwitch = ({ id, checked, onChange, label = '스위치', disabled = false }: FwSwitchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="switch">
      <input id={id} type="checkbox" checked={checked} onChange={handleChange} disabled={disabled} />
      <label htmlFor={id}>
        <span className="hide">{label}</span>
      </label>
    </div>
  );
};

export default FwSwitch;