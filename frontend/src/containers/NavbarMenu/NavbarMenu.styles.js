import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Playlist } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const MenuTitle = styled.h3`
  font-size: 14px;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
  padding: 20px;
`;

export const NavbarItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;

  padding: 20px;

  &:hover {
    background-color: white;
  }
`;

export const PlayListIcon = styled(Playlist)`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  color: var(--text-color);
`;

export const NavbarItemText = styled.span`
  font-size: 14px;
  color: var(--text-color);
`;
