import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

import {
  Container,
  LinkTitle,
  Title,
  CustomLink,
  MenuItemText,
  AlbumIcon,
  ArtistIcon,
  EpisodeIcon,
  PlaylistIcon,
  ShowIcon,
  TrackIcon,
} from './NavbarMenu.styles';

function NavbarMenu() {
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

  return (
    <Container>
      <LinkTitle to={`${url}`}>
        <Title>iMusic</Title>
      </LinkTitle>
      <CustomLink
        to={`${url}/albums`}
        className={pathname.includes('/albums') ? 'current-route' : ''}
      >
        <AlbumIcon />
        <MenuItemText>Albums</MenuItemText>
      </CustomLink>
      <CustomLink
        to={`${url}/artists`}
        className={pathname.includes('/artists') ? 'current-route' : ''}
      >
        <ArtistIcon />
        <MenuItemText>Artists</MenuItemText>
      </CustomLink>
      <CustomLink
        to={`${url}/episodes`}
        className={pathname.includes('/episodes') ? 'current-route' : ''}
      >
        <EpisodeIcon />
        <MenuItemText>Episodes</MenuItemText>
      </CustomLink>
      <CustomLink
        to={`${url}/playlists`}
        className={pathname.includes('/playlists') ? 'current-route' : ''}
      >
        <PlaylistIcon />
        <MenuItemText>Playlists</MenuItemText>
      </CustomLink>
      <CustomLink
        to={`${url}/shows`}
        className={pathname.includes('/shows') ? 'current-route' : ''}
      >
        <ShowIcon />
        <MenuItemText>Shows</MenuItemText>
      </CustomLink>
      <CustomLink
        to={`${url}/tracks`}
        className={pathname.includes('/tracks') ? 'current-route' : ''}
      >
        <TrackIcon />
        <MenuItemText>Tracks</MenuItemText>
      </CustomLink>
    </Container>
  );
}

export default NavbarMenu;
