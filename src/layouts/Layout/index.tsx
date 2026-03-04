import styled from '@emotion/styled';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`;
const Content = styled.div` 
    display: flex;
    flex: 1;
`;
const Main = styled.div`
    flex: 1;
 padding: 20px;
`;

interface Props {
    children?: React.ReactNode;
}

export const Layout = (props: Props) => {
    return (
        <Container>
            <Header />
            <Content className="contents">
                <Sidebar />
                <Main className="content">{props.children}</Main>
            </Content>
        </Container>
    );
};