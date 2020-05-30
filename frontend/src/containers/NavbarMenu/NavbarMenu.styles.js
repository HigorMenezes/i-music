import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Album,
  Playlist,
  Music,
  Microphone,
} from 'styled-icons/boxicons-solid';
import { Broadcast } from 'styled-icons/boxicons-regular';
import { Live } from 'styled-icons/remix-fill';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

export const LinkTitle = styled(Link)`
  padding: 10px;
  margin: 10px 0px 20px;
  cursor: pointer;
`;

export const Title = styled.h1`
  position: relative;
  font-size: 32px;
  font-family: 'Lobster';
  color: var(--primary-color);
  text-align: center;
`;

export const CustomLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 15px 40px;
  cursor: pointer;
  color: var(--text-color);
  font-weight: 900;

  transition: background-color 300ms;

  & > :not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    background-color: var(--primary-color);

    &::after {
      background-color: transparent;
    }
  }
`;

export const MenuItemText = styled.span`
  color: inherit;
  font-size: 14px;
`;

export const AlbumIcon = styled(Album)`
  width: 20px;
  height: 20px;
  color: inherit;
`;

export const ArtistIcon = styled(Microphone)`
  width: 20px;
  height: 20px;
  color: inherit;
`;

export const EpisodeIcon = styled(Broadcast)`
  width: 20px;
  height: 20px;
  color: inherit;
`;

export const PlaylistIcon = styled(Playlist)`
  width: 20px;
  height: 20px;
  color: inherit;
`;

export const ShowIcon = styled(Live)`
  width: 20px;
  height: 20px;
  color: inherit;
`;

export const TrackIcon = styled(Music)`
  width: 20px;
  height: 20px;
  color: inherit;
`;
