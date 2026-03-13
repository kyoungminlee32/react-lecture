import React from 'react';

interface FwSelectFieldProps {
    label?: string;
    valueText?: React.ReactNode;
    onClick?: () => void;
}

export const FwSelectField = ({
    label = '',
    valueText = '',
    onClick
    }: FwSelectFieldProps) => (
    <div className="field">
        <span className="label">{label}</span>
        <div className="select">
            <button type="button" onClick={onClick}>
                {valueText}
            </button>
        </div>
    </div>
);

export default FwSelectField;
