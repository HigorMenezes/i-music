import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  ${(props) => `background-image: url(${props.imageUrl});`}
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

export const Name = styled.h3`
  width: 100%;
  margin: 5px;
  color: var(--text-color);
  font-weight: 500;
`;

export const Description = styled.p`
  margin: 5px;
  width: 100%;
  color: var(--subtext-color);
  font-weight: 400;
`;
