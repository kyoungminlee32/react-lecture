import { MouseEvent } from 'react';

interface FwSelectFieldProps {
    label?: string;
    valueText?: string;
    onSelect?: (target: HTMLButtonElement) => void;
}

export const FwSelectField = ({ label = '', valueText = '', onSelect }: FwSelectFieldProps) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        onSelect?.(event.currentTarget);
    };

    return (
        <div className="field">
            <span className="label">{label}</span>
            <div className="select">
                <button type="button" onClick={handleClick}>
                    {valueText}
                </button>
            </div>
        </div>
    );
};

export default FwSelectField;
