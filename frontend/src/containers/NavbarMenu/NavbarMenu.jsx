import React from 'react';

import {
  Container,
  MenuTitle,
  NavbarItemsContainer,
  LinkItem,
  PlayListIcon,
  NavbarItemText,
} from './NavbarMenu.styles';

function NavbarMenu() {
  return (
    <Container>
      <MenuTitle>library</MenuTitle>
      <NavbarItemsContainer>
        <LinkItem>
          <PlayListIcon />
          <NavbarItemText>PlayList</NavbarItemText>
        </LinkItem>
      </NavbarItemsContainer>
    </Container>
  );
}

export default NavbarMenu;
