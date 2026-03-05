import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.aside`
  background-color: #f2f2f2;
  color: #000;
  padding: 20px;
  width: 200px;
`;

const Menu = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding: 0;
`;
const MenuItem = styled.li`
  margin-bottom: 10px;
`;
const MenuLink = styled(Link)`
  display: block;
  color: #000;
  text-decoration: none;
  padding: 4px 0;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const Info = styled.div`
  margin-top: 20px;
`;

const InfoTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const InfoText = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
`;

// interface SidebarProps {
//   children?: React.ReactNode;
//   className? : string;
// }

export const Sidebar = () => {
  return (
    <Container className="sidebar">
      <Menu>
        <MenuItem>
           <MenuLink to='/'>홈</MenuLink>
        </MenuItem>
        <MenuItem>
           <MenuLink to='/About'>About</MenuLink>
        </MenuItem>
        <MenuItem>
           <MenuLink to='/Example1'>Example1</MenuLink>
        </MenuItem>
        <MenuItem>
           <MenuLink to='/메뉴1'>메뉴1</MenuLink>
        </MenuItem>
        <MenuItem>
           <MenuLink to='/메뉴2'>메뉴2</MenuLink>
        </MenuItem>
        <MenuItem>
           <MenuLink to='/메뉴3'>메뉴3</MenuLink>
        </MenuItem>
      </Menu>
      <Info>
        <InfoTitle>Follow Us</InfoTitle>
        <InfoText>Stay connected with us</InfoText>
      </Info>
    </Container>
  );
}
