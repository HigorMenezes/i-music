import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 10px;

  height: 150px;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Image = styled.div`
  width: 150px;
  min-width: 150px;
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

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--subtext-color);
  font-weight: 500;
  margin: 5px;

  a {
    color: var(--primary-color);
  }

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TotalTracks = styled.p`
  margin: 5px;
  margin-top: auto;
  align-self: flex-end;
  color: var(--text-color);
  font-size: 14px;
`;
