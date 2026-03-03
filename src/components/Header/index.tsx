import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header`
  background-color: #4285f4;
  color: #fff;
  padding: 20px;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled.a`
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

export const Header = () => {
  return (
    <Container>
      <Nav>
        <NavLink href='/'>PropsAndState</NavLink>
        <NavLink href='/StateComponent1'>StateComponent1</NavLink>
        <NavLink href='/StateComponent2'>StateComponent2</NavLink>
      </Nav>
    </Container>
  );
}

export default Header;
