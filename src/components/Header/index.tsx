import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.header`
  background-color: #4285f4;
  color: #fff;
  padding: 20px;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled(Link)<{ isActive?: boolean }>`
  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  text-decoration: ${props => props.isActive ? 'underline' : 'none'};

  &:hover {
    text-decoration: underline;
  }
`;

// interface HeaderProps {
//   children?: React.ReactNode;
//   className? : string;
// }

export const Header = () => {
  const location = useLocation();
  const currentPath = decodeURI(location.pathname);

  return (
    <Container className="header">
      <Nav>
        <NavLink to='/' isActive={currentPath === '/'}>
          홈
        </NavLink>
        <NavLink to='/About' isActive={currentPath === '/About'}>
          About
        </NavLink>
        <NavLink to='/Example1' isActive={currentPath === '/Example1'}>
          Example1
        </NavLink>
        <NavLink to='/Example2' isActive={currentPath === '/Example2'}>
          Example2
        </NavLink>
        <NavLink to='/메뉴1' isActive={currentPath === '/메뉴1'}>
          메뉴1
        </NavLink>
        <NavLink to='/메뉴2' isActive={currentPath === '/메뉴2'}>
          메뉴2
        </NavLink>
        <NavLink to='/메뉴3' isActive={currentPath === '/메뉴3'}>
          메뉴3
        </NavLink>
        <NavLink to='/Worklist' isActive={currentPath === '/Worklist'}>
          Worklist
        </NavLink>
      </Nav>
    </Container>
  );
}
