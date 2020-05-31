import React from 'react';
import { useRouteMatch } from 'react-router-dom';

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

  return (
    <Container>
      <LinkTitle to={`${url}`}>
        <Title>iMusic</Title>
      </LinkTitle>
      <CustomLink to={`${url}/albums`}>
        <AlbumIcon />
        <MenuItemText>Albums</MenuItemText>
      </CustomLink>
      <CustomLink to={`${url}/artists`}>
        <ArtistIcon />
        <MenuItemText>Artists</MenuItemText>
      </CustomLink>
      <CustomLink to={`${url}/episodes`}>
        <EpisodeIcon />
        <MenuItemText>Episodes</MenuItemText>
      </CustomLink>
      <CustomLink to={`${url}/playlists`}>
        <PlaylistIcon />
        <MenuItemText>Playlists</MenuItemText>
      </CustomLink>
      <CustomLink to={`${url}/shows`}>
        <ShowIcon />
        <MenuItemText>Shows</MenuItemText>
      </CustomLink>
      <CustomLink to={`${url}/tracks`}>
        <TrackIcon />
        <MenuItemText>Tracks</MenuItemText>
      </CustomLink>
    </Container>
  );
}

export default NavbarMenu;
