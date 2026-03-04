import { useContext } from 'react';
import { CountContext } from '../index';
import style from '@emotion/styled';
const Container = style.span`
    font-size: 15px;
    font-weight: bold;
    padding: 10px;
`;

export const CountLabel = () => {
    const { count } = useContext(CountContext);

    return (
        <Container>{count}</Container>
    );
};