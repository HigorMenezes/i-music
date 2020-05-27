import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import {
  Container,
  MenuTitle,
  NavbarItemsContainer,
  LinkItem,
  PlayListIcon,
  NavbarItemText,
} from './NavbarMenu.styles';

function NavbarMenu() {
  const { url } = useRouteMatch();

  return (
    <Container>
      <MenuTitle>library</MenuTitle>
      <NavbarItemsContainer>
        <LinkItem to={`${url}/tracks`}>
          <PlayListIcon />
          <NavbarItemText>Tracks</NavbarItemText>
        </LinkItem>
      </NavbarItemsContainer>
    </Container>
  );
}

export default NavbarMenu;
