import React from 'react';
import styled from '@emotion/styled';
import { Header } from '../../components/Header';

const Container = styled.div``;

interface Props {
    children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
};

export default Layout;