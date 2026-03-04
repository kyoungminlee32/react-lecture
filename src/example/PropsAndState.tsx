import React from 'react';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

export const PropsAndState = () => {
    const  [count, setCount] = React.useState(2);
    const add = () => {
        setCount(count + 1);
    }
    const sub = () => {
        setCount(count - 1);
    }

    return (
        <>
            <Button onClick={add} label="+" />
            <Label data={count} />
            <Button onClick={sub} label="-" />
        </>
    )
}