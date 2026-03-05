import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Text = styled.p`
  margin: 0;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

// interface HeaderProps {
//   children?: React.ReactNode;
//   className? : string;
// }

export const Footer = () => {
  return (
    <Container className="footer">
      <Text>© 2024 Around Hub Studio. All rights reserved.</Text>
      <Nav>
        <NavLink to='#'>Facebook</NavLink>
        <NavLink to='#'>Twitter</NavLink>
        <NavLink to='#'>Instagram</NavLink>
        <NavLink to='#'>LinkedIn</NavLink>
      </Nav>
    </Container>
  );
}
