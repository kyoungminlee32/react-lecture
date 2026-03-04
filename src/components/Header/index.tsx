import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.header`
  background-color: #4285f4;
  color: #fff;
  padding: 20px;
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

export const Header = () => {
  return (
    <Container className="header">
      <Nav>
        <NavLink to='/'>홈</NavLink>
        <NavLink to='/메뉴1'>메뉴1</NavLink>
        <NavLink to='/메뉴2'>메뉴2</NavLink>
        <NavLink to='/메뉴3'>메뉴3</NavLink>
        <NavLink to='/Worklist'>Worklist</NavLink>
      </Nav>
    </Container>
  );
}
