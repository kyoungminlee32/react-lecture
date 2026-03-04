import React, { useState } from 'react';   

export const StateComponent1 = () => {
    const [message, setMessage] = useState('');
    const onChange1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setMessage(e.target.value);
    }
    return (   
        <div>
            <h1>StateComponent1</h1>
            <input type="text" value={message} onChange={onChange1}/>
            <p>{message}</p>
        </div>
    )
}