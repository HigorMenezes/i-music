import styled from 'styled-components';
import { Play } from 'styled-icons/fa-solid';

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;

  height: 50px;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Image = styled.div`
  width: 50px;
  min-width: 50px;
  height: 100%;

  background: var(--loading-bg-color);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
`;

export const Name = styled.h3`
  width: 100%;
  font-size: 16px;
  color: var(--text-color);
  font-weight: 700;
  margin: 5px 10px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Duration = styled.p`
  font-size: 14px;
  color: var(--subtext-color);
  margin: 5px 10px;
`;

export const ButtonPlay = styled.button`
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  outline: none;
  margin: 5px 10px;
  padding: 0;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const PlayIcon = styled(Play)`
  width: 18px;
  height: 18px;
  color: var(--primary-color);
`;
