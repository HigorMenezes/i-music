import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;

  display: flex;
  flex-direction: column;

  .group {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const NavbarContainer = styled.nav`
  min-width: var(--navbar-width);
  width: 25%;
  height: 100%;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
`;

export const PlayerContainer = styled.footer`
  height: var(--player-height);
  width: 100%;
  background-color: var(--player-background);
  padding: 10px;
`;
