import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
`;

export const MainContainer = styled.main`
  width: 100%;
  height: calc(100% - var(--player-height));
  padding: 20px;
  padding-left: calc(var(--navbar-width) + 20px);
  background-color: var(--background-color);
  overflow: auto;
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: var(--navbar-width);
  height: 100%;
  background-color: var(--navbar-color);
`;

export const PlayerContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-left: var(--navbar-width);
  height: var(--player-height);
  background-color: var(--player-background);
`;
