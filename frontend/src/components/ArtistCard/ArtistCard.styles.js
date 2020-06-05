import styled from 'styled-components';
import { Heart } from 'styled-icons/icomoon';

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 10px;

  height: 200px;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Image = styled.div`
  width: 200px;
  min-width: 200px;
  height: 100%;

  background: var(--loading-bg-color);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Name = styled.h3`
  font-size: 22px;
  color: var(--text-color);
  font-weight: 700;
  text-align: center;
  margin: 5px;
`;

export const Genres = styled.p`
  font-size: 16px;
  color: var(--subtext-color);
  margin: 5px;
`;

export const FollowersContainer = styled.div`
  margin: 5px;
  margin-top: auto;
  align-self: flex-end;

  display: flex;
  align-items: center;
`;

export const Followers = styled.p`
  font-size: 14px;
  color: var(--text-color);
  margin: 5px;
`;

export const FollowerIcon = styled(Heart)`
  width: 14px;
  height: 14px;
  color: red;
`;
