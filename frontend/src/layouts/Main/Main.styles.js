import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const MainContainer = styled.main`
  height: 100%;
  padding: 20px;
  margin-left: var(--navbar-width);
  overflow: auto;
  background-color: var(--background-color);
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: var(--navbar-width);
  padding-bottom: var(--player-height);
  height: 100%;
  background-color: var(--navbar-background-color);
`;

export const PlayerContainer = styled.footer`
  position: fixed;
  height: var(--player-height);
  width: var(--navbar-width);
  left: 0;
  bottom: 0;
  background-color: var(--player-background-color);
`;
